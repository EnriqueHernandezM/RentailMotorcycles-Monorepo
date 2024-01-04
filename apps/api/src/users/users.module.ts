import { Module } from '@nestjs/common';
import { databaseModule } from '../schemas/schemas.module';
import { ConfigModule } from '@nestjs/config';
import { UsersEntitiesProviders } from './users.providers';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './usersAuth.consts';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './admins.guard';
@Module({
  imports: [
    databaseModule,
    ConfigModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, ...UsersEntitiesProviders],
})
export class UsersModule {}
