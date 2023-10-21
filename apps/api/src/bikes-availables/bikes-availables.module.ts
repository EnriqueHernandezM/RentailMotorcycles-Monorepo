import { Module } from '@nestjs/common';
import { BikesAvailablesService } from './bikes-availables.service';
import { BikesAvailablesController } from './bikes-availables.controller';
import { bikesAvailablesEntityProviders } from './bikes-availables.providers';
import { databaseModule } from '../schemas/schemas.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [databaseModule, ConfigModule],
  controllers: [BikesAvailablesController],
  providers: [BikesAvailablesService, ...bikesAvailablesEntityProviders],
})
export class BikesAvailablesModule {}
