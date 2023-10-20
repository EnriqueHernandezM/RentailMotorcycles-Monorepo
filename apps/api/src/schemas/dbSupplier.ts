/* eslint-disable prettier/prettier */
import { Sequelize } from 'sequelize-typescript';
import { BikesAvailablesEntity } from './enties/bikes-avibles.entity';

export const dataBaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
       
      });
      sequelize.addModels([BikesAvailablesEntity]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
