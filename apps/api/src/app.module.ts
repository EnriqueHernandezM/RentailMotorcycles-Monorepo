import { Module } from '@nestjs/common';

import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { join } from 'path';
import { BikesAvailablesModule } from './bikes-availables/bikes-availables.module';
import { UsersModule } from './users/users.module';
import {} from './schemas/enties/usersBikes.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      envFilePath: '.env',
    }),
    BikesAvailablesModule,
    UsersModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client,dist'),
    }),
  ],
})
export class AppModule {}
