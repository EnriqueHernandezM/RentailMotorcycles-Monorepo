import {
  Injectable,
  Inject,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { CreateUser } from './dto/create-user.dto';
import { UsersEntities } from 'src/schemas/enties/users.entity';
import { JwtService } from '@nestjs/jwt';
import { ConectUser } from './dto/conect-user.dto';
import { Role } from 'src/schemas/enums/role.enum';
import * as bcrypt from 'bcrypt';
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
        //definir un dto de salida de datos de usuario yo creo seria lo apropiado
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
      /* const base64 = base64Url.replace("-", "+").replace("_", "/");
  }
  // return the result parsed in JSON
  return JSON.parse(window.atob(base64));
 */
      const { password, email, roles } = useInfo;
      //aqui o obtengo id o lo pongo mcomo null
      const id = null;
      const access_token = await this.factoryTokens({ email, id, roles });

      return {
        access_token,
      };
    } catch (error) {
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

  private async factoryTokens(info: { id: any; email: any; roles: any }) {
    try {
      let payload;
      if (info.id === null) {
        payload = {
          emailUser: info.email,
          roles: info.roles,
        };
      }
      payload = {
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
      if (pin === 123) {
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
