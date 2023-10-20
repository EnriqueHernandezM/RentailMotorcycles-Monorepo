/* eslint-disable prettier/prettier */
import { BikesAvailablesEntity } from '../schemas/enties/bikes-avibles.entity';

export const bikesAvailablesEntityProviders = [
  {
    provide: 'tableBikesAvailables',
    useValue: BikesAvailablesEntity,
  },
];
