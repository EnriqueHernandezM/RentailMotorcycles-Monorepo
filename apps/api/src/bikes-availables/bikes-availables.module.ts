import { Module } from '@nestjs/common';
import { BikesAvailablesService } from './bikes-availables.service';
import { BikesAvailablesController } from './bikes-availables.controller';
import { bikesAvailablesEntityProviders } from './bikes-availables.providers';
import { databaseModule } from '../schemas/schemas.module';

@Module({
  imports: [databaseModule],
  controllers: [BikesAvailablesController],
  providers: [BikesAvailablesService, ...bikesAvailablesEntityProviders],
})
export class BikesAvailablesModule {}
