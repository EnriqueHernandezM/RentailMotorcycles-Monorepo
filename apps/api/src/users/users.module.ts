import { Module } from '@nestjs/common';
import { databaseModule } from '../schemas/schemas.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersEntitiesProviders } from './users.providers';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule,
    databaseModule,
    JwtModule.registerAsync({
      global: true,
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('secretToken'),
        signOptions: { expiresIn: '2d' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, ...UsersEntitiesProviders],
})
export class UsersModule {}
