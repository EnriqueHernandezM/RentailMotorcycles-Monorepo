import {
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  Param,
  Body,
  Delete,
  Patch,
  ParseIntPipe,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUser } from './dto/create-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ConectUser } from './dto/conect-user.dto';
import { AuthGuard } from './usersAuth.guard';
import { Roles } from '../config/roles.decorator';
import { Role } from '../schemas/enums/role.enum';
import { RolesGuard } from './admins.guard';

@ApiTags('Users')
@Controller('rentail_motorcycles/api/users')
export class UsersController {
  constructor(readonly userService: UsersService) {}
  @Post('/createUser')
  @ApiResponse({
    status: 200,
    description: 'create a new User',
  })
  async createANewUser(@Res() res, @Body() createUser: CreateUser) {
    try {
      const resToCreateNewUser = await this.userService.createNewUser(
        createUser,
      );
      return res.status(HttpStatus.CREATED).json(resToCreateNewUser);
    } catch (err) {
      throw err;
    }
  }

  @Post('/conect')
  @ApiResponse({
    status: 200,
    description: 'login',
  })
  async conectUser(@Res() res, @Body() conectUser: ConectUser) {
    try {
      const resToCreateNewUser = await this.userService.conectUser(conectUser);
      return res.status(HttpStatus.CREATED).json(resToCreateNewUser);
    } catch (err) {
      throw err;
    }
  }

  @UseGuards(AuthGuard)
  //@UseGuards(RolesGuard)
  @Get('/oneUser/:id')
  @ApiResponse({
    status: 200,
    description: 'Get inventory motorcycles',
  })
  //@Roles(Role.Admin)
  async oneUser(@Res() res, @Param('id', ParseIntPipe) id: number) {
    try {
      const resGetUser = await this.userService.findOneUser(id);

      return res.status(HttpStatus.OK).json(resGetUser);
    } catch (err) {
      throw err;
    }
  }
}
