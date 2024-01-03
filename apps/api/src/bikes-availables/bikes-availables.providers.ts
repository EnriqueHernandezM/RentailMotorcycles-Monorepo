import { BikesAvailablesEntities } from '../schemas/enties/bikes-avibles.entity';

export const bikesAvailablesEntitiesProviders = [
  {
    provide: 'tableBikesAvailables',
    useValue: BikesAvailablesEntities,
  },
];
