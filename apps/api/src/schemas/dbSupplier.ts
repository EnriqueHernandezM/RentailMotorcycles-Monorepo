import { Sequelize } from 'sequelize-typescript';
import { BikesAvailablesEntity } from './enties/bikes-avibles.entity';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

export const dataBaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: configService.get<string>('HOST_DB'),
        port: parseInt(configService.get<string>('PORT_DB')),
        username: 'root',
        password: configService.get<string>('PASSWORD_DB'),
        database: configService.get<string>('NAME_DB'),
      });

      sequelize.addModels([BikesAvailablesEntity]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
