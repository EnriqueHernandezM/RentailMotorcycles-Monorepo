import {
  Injectable,
  Inject,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUser } from './dto/create-user.dto';
import { UsersEntities } from 'src/schemas/enties/users.entity';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './usersAuth.consts';
import { ConectUser } from './dto/conect-user.dto';
import { log } from 'util';
@Injectable()
export class UsersService {
  constructor(
    @Inject('tableUsers')
    private tableUsers: typeof UsersEntities,
    private jwtService: JwtService,
  ) {}

  async createNewUser(createUser: CreateUser) {
    try {
      const [user, created] = await this.tableUsers.findOrCreate({
        where: { email: createUser.email },
        defaults: createUser,
      });
      if (created) {
        const payload = { sub: user.id, emailUser: user.email };
        const access_token = await this.jwtService.signAsync(payload);
        const { id, ...userResObject } = user.dataValues;
        return { ...userResObject, access_token };
        //definir un dto de salida de datos de usuario
      }
      //Importante saber con que resplner a un usuario existente
      throw new NotFoundException('User Existin');
    } catch (error) {
      if (error.status === 404) {
        throw error;
      }
      throw new InternalServerErrorException(`${error}`);
    }
  }
  async conectUser(useInfo: ConectUser) {
    try {
      const payload = { sub: useInfo.password, emailUser: useInfo.email };
      return {
        access_token: await this.jwtService.signAsync(payload),
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
}
