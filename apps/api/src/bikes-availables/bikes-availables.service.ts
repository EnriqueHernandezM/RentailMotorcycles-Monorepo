import {
  Injectable,
  Inject,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import {
  CreateBikeAvailable,
  UpdateBikeAvailable,
} from './dto/bikes-available.dto';
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
    try {
      const PrettierCreateBike: CreateBikeAvailable =
        await this.changeFirstChart(createBikeAvailable);
      return await this.tableBikesAvailable.create<BikesAvailablesEntity>(
        PrettierCreateBike,
      );
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async findAll(): Promise<BikesAvailablesEntity[]> {
    try {
      return await this.tableBikesAvailable.findAll<BikesAvailablesEntity>();
    } catch (error) {
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async deleteOne(id: number): Promise<number> {
    try {
      const getDeleted: number = await this.tableBikesAvailable.destroy({
        where: {
          id,
        },
      });
      if (getDeleted === 0) {
        throw new NotFoundException(`Item whit ID: ${id} not availabe`);
      }
      return getDeleted;
    } catch (error) {
      if (error.status === 404) {
        throw error;
      }
      throw new InternalServerErrorException(`${error}`);
    }
  }

  async modifiedOne(id: number, body: object): Promise<[number]> {
    try {
      const updateOneField = await this.tableBikesAvailable.findByPk(id);
      if (updateOneField === null) {
        throw new NotFoundException(`Item whit ID: ${id} not availabe`);
      }
      const selectKeysToModified: UpdateBikeAvailable = {};
      for (const key in body) {
        if (typeof body[key] === 'string') {
          const firstCharter = body[key].charAt(0).toUpperCase();
          const residueCharters = body[key].slice(1);
          body[key] = firstCharter + residueCharters;
        }
        selectKeysToModified[key] = body[key];
      }
      return await this.tableBikesAvailable.update(selectKeysToModified, {
        where: { id },
      });
    } catch (error) {
      if (error.status === 404) {
        throw error;
      }
      throw new InternalServerErrorException(`${error}`);
    }
  }
  private async changeFirstChart(
    createdObject: CreateBikeAvailable,
  ): Promise<CreateBikeAvailable> {
    for (const key in createdObject) {
      if (typeof createdObject[key] === 'string') {
        const firstChartwer = createdObject[key].charAt(0).toUpperCase();
        const residue = createdObject[key].slice(1);
        createdObject[key] = firstChartwer + residue;
      }
    }
    return createdObject;
  }
}
