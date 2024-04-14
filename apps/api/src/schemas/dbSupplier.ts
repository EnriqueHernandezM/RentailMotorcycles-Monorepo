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
        /* pool: {
          min: 1,
          max: 1,
          acquire: 3000,
          idle: 0,
        }, */
        //evict: CURRENT_LAMBDA_FUNCTION_TIMEOUT,
        //idle: 0,
        dialect: 'mysql',
        //host: configService.get<string>('HOST_DB'),
        port: parseInt(configService.get<string>('PORT_DB')),
        username: 'admin',
        //password: configService.get<string>('PASSWORD_DB'),
        database: configService.get<string>('NAME_DB'),
        /* dialectOptions: {
          ssl: 'Amazon RDS',
        }, */
      });

      sequelize.addModels([UsersBikesEntities]);
      sequelize.addModels([BikesAvailablesEntities]);
      sequelize.addModels([UsersEntities]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
