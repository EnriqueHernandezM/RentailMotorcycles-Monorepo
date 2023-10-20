/* eslint-disable prettier/prettier */
import { Table, Column, Model, DataType } from 'sequelize-typescript';

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
  model:string;

  @Column({
    allowNull: false,
  })
  cc: number;

  @Column({ 
    allowNull: false,
  })
  occupants: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  autonomy:string;
}
