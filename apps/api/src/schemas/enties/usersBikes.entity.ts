import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { UsersEntities } from './users.entity';
import { BikesAvailablesEntities } from './bikes-avibles.entity';

@Table
export class UsersBikesEntities extends Model<UsersBikesEntities> {
  @ForeignKey(() => UsersEntities)
  @Column
  userId: number;

  @ForeignKey(() => BikesAvailablesEntities)
  @Column
  historyBikeId: number;
}
