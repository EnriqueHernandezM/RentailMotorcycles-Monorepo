import { Module } from '@nestjs/common';
import { BikesAvailablesService } from './bikes-availables.service';
import { BikesAvailablesController } from './bikes-availables.controller';
import { bikesAvailablesEntitiesProviders } from './bikes-availables.providers';
import { databaseModule } from '../schemas/schemas.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [databaseModule, ConfigModule],
  controllers: [BikesAvailablesController],
  providers: [BikesAvailablesService, ...bikesAvailablesEntitiesProviders],
})
export class BikesAvailablesModule {}
