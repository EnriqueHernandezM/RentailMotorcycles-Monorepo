import { Sequelize } from 'sequelize-typescript';
import { BikesAvailablesEntities } from './enties/bikes-avibles.entity';
import { ConfigService } from '@nestjs/config';
import { UsersEntities } from './enties/users.entity';
import { UsersBikesEntities } from './enties/usersBikes.entity';

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

      sequelize.addModels([UsersBikesEntities]);
      sequelize.addModels([BikesAvailablesEntities]);
      sequelize.addModels([UsersEntities]);

      await sequelize.sync();
      return sequelize;
    },
  },
];
