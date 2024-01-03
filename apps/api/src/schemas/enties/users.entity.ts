import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class UsersEntities extends Model<UsersEntities> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  birthDate: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city: string;
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  motorcycleAsigned: boolean;
  @Column({
    allowNull: true,
  })
  idMotorcycleAsigned: number;
}

/* chan() {
    UsersEntity.belongsToMany(BikesAvailablesEntity, {
      through: 'UsersMotorcycles',
    });
    BikesAvailablesEntity.belongsToMany(UsersEntity, {
      through: 'UsersMotorcycles',
    });
  } */
