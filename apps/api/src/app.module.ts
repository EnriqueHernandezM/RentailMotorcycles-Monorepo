import { Module } from '@nestjs/common';
import { BikesAvailablesModule } from './bikes-availables/bikes-availables.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/env.config';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    BikesAvailablesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client,dist'),
    }),
  ],
})
export class AppModule {}
