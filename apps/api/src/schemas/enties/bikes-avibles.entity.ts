/* eslint-disable prettier/prettier */
import { Table, Column, Model, DataType } from 'sequelize-typescript';

export enum OptionsStatus {
  available = 'Available',
  onRoute = 'On route',
}

export enum OpttionsExtImg {
  jpg = '.jpg',
  png = '.png',
}
@Table
export class BikesAvailablesEntity extends Model<BikesAvailablesEntity> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  brand: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  model: string;

  @Column({
    allowNull: false,
  })
  cc: number;

  @Column({
    allowNull: false,
  })
  occupants: number;

  @Column({
    allowNull: false,
  })
  autonomy: number;

  @Column({
    allowNull: false,
  })
  speed: number;

  @Column({
    allowNull: false,
  })
  weigth: number;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status: OptionsStatus;
}
