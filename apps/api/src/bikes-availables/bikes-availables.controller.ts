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
import { BikesAvailablesService } from './bikes-availables.service';
import { AuthGuard } from '../users/usersAuth.guard';
import {
  CreateBikeAvailable,
  UpdateBikeAvailable,
} from './dto/bikes-available.dto';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CreateBikeAvailableRes,
  DeleteElementRes,
  UpdateItemRes,
} from './dto/res-swagger.dto';
import { Role } from 'src/schemas/enums/role.enum';
import { Roles } from 'src/config/roles.decorator';
import { RolesGuard } from 'src/users/admins.guard';
@ApiTags('Motorcycles')
@Controller('rentail_motorcycles/api')
export class BikesAvailablesController {
  constructor(readonly bikesAvailablesService: BikesAvailablesService) {}

  @Get('/bikes-availables')
  @ApiResponse({
    status: 200,
    description: 'Get inventory motorcycles',
  })
  async allItems(@Res() res) {
    try {
      const inventary = await this.bikesAvailablesService.findAll();
      return res.status(HttpStatus.OK).json({ inventary });
    } catch (error) {
      throw error;
    }
  }

  @Post('/postNew')
  @ApiResponse({
    status: 201,
    description: 'Add new item in the inventory',
    type: CreateBikeAvailableRes,
  })
  async createNewItem(
    @Res() res,
    @Body() createBikeAvailable: CreateBikeAvailable,
  ) {
    try {
      console.log('kijk');
      const createNew = await this.bikesAvailablesService.create(
        createBikeAvailable,
      );

      return res.status(HttpStatus.CREATED).json({
        message: 'reciveid',
        itemSaves: createNew,
        type: CreateBikeAvailable,
      });
    } catch (error) {
      throw error;
    }
  }
  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Delete('/deleteOne/:id')
  @Roles(Role.Admin)
  @ApiResponse({
    status: 200,
    description: 'Delete one element of inventory',
    type: DeleteElementRes,
  })
  async deleteOneItem(@Res() res, @Param('id', ParseIntPipe) id: number) {
    try {
      const deleteOneItem = await this.bikesAvailablesService.deleteOne(id);
      return res.status(HttpStatus.OK).json({
        message: 'deleted',
        id_Element: id,
        elements_Deleted: deleteOneItem,
      });
    } catch (error) {
      throw error;
    }
  }

  @Patch('/modifiedOne/:id')
  @ApiResponse({
    status: 200,
    description: 'Modified one element of inventory',
    type: UpdateItemRes,
  })
  async modifiedOneItem(
    @Res() res,
    @Body() updateBikeAvailable: UpdateBikeAvailable,
    @Param('id', ParseIntPipe) id: number,
  ) {
    try {
      const modifiedOneItem = await this.bikesAvailablesService.modifiedOne(
        id,
        updateBikeAvailable,
      );
      return res.status(HttpStatus.OK).json({
        message: 'update',
        modifiedOneItem,
      });
    } catch (error) {
      throw error;
    }
  }
}
