/* eslint-disable prettier/prettier */
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import {
  CreateBikeAvailable,
  UpdateBikeAvailable,
} from './dto/bikes-available.dto';
import { BikesAvailablesEntity } from '../schemas/enties/bikes-avibles.entity';
import { KeyObject } from 'crypto';

@Injectable()
export class BikesAvailablesService {
  constructor(
    @Inject('tableBikesAvailables')
    private tableBikesAvailable: typeof BikesAvailablesEntity,
  ) {}
  async create(
    createBikeAvailable: CreateBikeAvailable,
  ): Promise<BikesAvailablesEntity> {
    //  this.changeFirstChart(createBikeAvailable.brand);
    return await this.tableBikesAvailable.create<BikesAvailablesEntity>(
      createBikeAvailable,
    );
  }
  async findAll(): Promise<BikesAvailablesEntity[]> {
    return await this.tableBikesAvailable.findAll<BikesAvailablesEntity>();
  }

  async deleteOne(id: number): Promise<number> {
    return await this.tableBikesAvailable.destroy({
      where: {
        id,
      },
    });
  }
  async modifiedOne(id: number, body: object): Promise<[number]> {
    const prob: UpdateBikeAvailable = {};
    for (const key in body) {
      prob[key] = body[key];
    }
    const updateOneField = await this.tableBikesAvailable.findByPk(id);
    if (updateOneField === null) {
      throw new NotFoundException(`No encontramos el producto ${id}`);
    }
    return await this.tableBikesAvailable.update(prob, {
      where: { id },
    });
  }
  /*  private async changeFirstChart(
    createdObject: CreateBikeAvailable,
  ): CreateBikeAvailable {
    

  
    const abstractFirst: string = field.charAt(0).toUpperCase();
    const abstracElse: string = field.slice(1);

    console.log(abstractFirst + abstracElse);
  } */
}
