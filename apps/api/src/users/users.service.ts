import {
  Injectable,
  Inject,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUser } from './dto/create-user.dto';
import { UsersEntities } from 'src/schemas/enties/users.entity';
import { JwtService } from '@nestjs/jwt';
import { ConectUser } from './dto/conect-user.dto';
import { Role } from 'src/schemas/enums/role.enum';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
const configService = new ConfigService();
@Injectable()
export class UsersService {
  constructor(
    @Inject('tableUsers')
    private tableUsers: typeof UsersEntities,
    private jwtService: JwtService,
  ) {}

  async createNewUser(createUser: CreateUser, haveApin?: number | false) {
    try {
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(createUser.password, saltOrRounds);
      createUser.password = hash;
      const roleToCount = await this.asignRoleToUser(haveApin);
      console.log(roleToCount);

      const [user, created] = await this.tableUsers.findOrCreate({
        where: { email: createUser.email },
        defaults: { roles: roleToCount, ...createUser },
      });
      if (created) {
        const payload = {
          sub: user.id,
          emailUser: user.email,
          roles: user.roles,
        };
        const access_token = await this.jwtService.signAsync(payload);
        const { id, password, roles, ...userResObject } = user.dataValues;
        return { ...userResObject, access_token };
      }
      throw new BadRequestException('User Exists');
    } catch (error) {
      if (error.status === 400) {
        throw error;
      }
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async conectUser(useInfo: ConectUser) {
    try {
      const findThatUserToCompare = await this.tableUsers.findOne({
        where: {
          email: useInfo.email,
        },
      });
      const { email } = useInfo;
      const isMatch = await bcrypt.compare(
        useInfo.password,
        findThatUserToCompare.password,
      );
      const { id, password, roles, ...userToRes } =
        findThatUserToCompare.dataValues;
      if (!isMatch) {
        throw new UnauthorizedException();
      }
      const access_token = await this.factoryTokens({ id, email, roles });
      return {
        ...userToRes,
        access_token,
      };
    } catch (error) {
      if (error.status === 401) {
        throw error;
      }
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async findOneUser(id: number): Promise<CreateUser> {
    try {
      const find = await this.tableUsers.findOne({ where: { id: id } });
      if (find === null) {
        throw new NotFoundException(`Item whit ID:${id} not exist`);
      }
      return find;
    } catch (error) {
      if (error.status === 404) {
        throw error;
      }
      throw new InternalServerErrorException(`${error}`);
    }
  }

  private async factoryTokens(info: {
    id: number;
    email: string;
    roles: string;
  }) {
    try {
      const payload = {
        sub: info.id,
        emailUser: info.email,
        roles: info.roles,
      };
      return await this.jwtService.signAsync(payload);
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }
  private async asignRoleToUser(pin: number | false) {
    try {
      if (+pin === +configService.get<string>('PIN_ADMIN')) {
        return Role.Admin;
      }
      if (pin === false) {
        return Role.User;
      }
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }
}
