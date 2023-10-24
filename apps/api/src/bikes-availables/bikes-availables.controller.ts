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
} from '@nestjs/common';
import { BikesAvailablesService } from './bikes-availables.service';
import { CreateBikeAvailable } from './dto/bikes-available.dto';
@Controller('bikes-availables')
export class BikesAvailablesController {
  constructor(readonly bikesAvailablesService: BikesAvailablesService) {}

  @Get()
  async allItems(@Res() res) {
    const all = await this.bikesAvailablesService.findAll();
    return res.status(HttpStatus.OK).json({
      all,
    });
  }

  @Post('/postNew')
  async createNewItem(
    @Res() res,
    @Body() createBikeAvailable: CreateBikeAvailable,
  ) {
    const createNew = await this.bikesAvailablesService.create(
      createBikeAvailable,
    );
    return res.status(HttpStatus.OK).json({
      message: 'reciveid',
      itemSaves: createNew,
    });
  }

  @Delete('/deleteOne/:id')
  async deleteOneItem(@Res() res, @Param('id', ParseIntPipe) id: number) {
    const deleteOneItem = await this.bikesAvailablesService.deleteOne(id);
    return res.status(HttpStatus.OK).json({
      message: 'deleted',
      id_Element: id,
      elements_Deleted: deleteOneItem,
    });
  }

  @Patch('/modifiedOne/:id')
  async modifiedOneItem(
    @Res() res,
    @Body() body,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const modifiedOneItem = await this.bikesAvailablesService.modifiedOne(
      id,
      body,
    );
    return res.status(HttpStatus.OK).json({
      message: 'update',
      modifiedOneItem,
    });
  }
}
