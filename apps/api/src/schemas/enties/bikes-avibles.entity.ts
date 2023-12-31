import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { OptionsStatus } from '../enums/optionStatusBike.enum';

@Table
export class BikesAvailablesEntities extends Model<BikesAvailablesEntities> {
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

  /* @BelongsToMany(() => UsersEntities, () => UsersBikesEntities)
  users: Array<UsersEntities & { UsersBikesEntities: UsersBikesEntities }>; */
}
