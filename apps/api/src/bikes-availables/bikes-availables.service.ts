/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { CreateBikeAvailable ,UpdateBikeAvailable} from './dto/bikes-available.dto';
import { bikesAvailablesInterface } from './interfaces/bikes-available.interfaces';
import { BikesAvailablesEntity } from '../schemas/enties/bikes-avibles.entity';

@Injectable()
export class BikesAvailablesService {
  constructor(
    @Inject('tableBikesAvailables')
    private tableBikesAvailable: typeof BikesAvailablesEntity,
  ) {}
  async create(
    createBikeAvailable: CreateBikeAvailable,
  ): Promise<BikesAvailablesEntity> {
    return await this.tableBikesAvailable.create<BikesAvailablesEntity>(
      createBikeAvailable,
    );
  }
  async findAll(): Promise<BikesAvailablesEntity[]> {
    return this.tableBikesAvailable.findAll<BikesAvailablesEntity>();
  }

  async deleteOne(id: string): Promise<number> {
    return await this.tableBikesAvailable.destroy({
      where: {
        id,
      },
    });
  }

  async modifiedOne(id: string, body: object): Promise<object> {
    const prob: UpdateBikeAvailable = {};
    for (const key in body) {
      prob[key] = body[key];
    }
    return  await this.tableBikesAvailable.update(prob ,{
      where: { id },
    }); 


  }
}
