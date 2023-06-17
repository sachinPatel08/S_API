import { DataTypes } from 'sequelize';
import { Table, Column, Model, DataType } from 'sequelize-typescript';
import {
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  BeforeValidate,
} from 'sequelize-typescript';

@Table({
  tableName: 'Users',
  timestamps: true,
})
export class Users extends Model<Users> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  public id;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public firstName;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public lastName;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public email;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public password;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  public gender;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  public age;

  @CreatedAt
  @Column({
    field: 'created_at_',
    allowNull: false,
  })
  public createdAt: Date;

  @UpdatedAt
  @Column({
    field: 'updated_at_',
    allowNull: true,
  })
  public updatedAt: Date;

  @DeletedAt
  @Column({
    field: 'deleted_at_',
    allowNull: true,
  })
  public deletedAt: Date;
}
