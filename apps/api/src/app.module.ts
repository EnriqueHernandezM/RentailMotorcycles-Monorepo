import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BikesAvailablesModule } from './bikes-availables/bikes-availables.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    BikesAvailablesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'client,dist'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
