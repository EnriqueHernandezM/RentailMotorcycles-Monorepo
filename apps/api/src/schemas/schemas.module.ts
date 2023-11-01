/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { dataBaseProviders } from './dbSupplier';

@Module({
  providers: [...dataBaseProviders],
  exports: [...dataBaseProviders],
})
export class databaseModule {}
