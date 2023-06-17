import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'Post',
  timestamps: true,
})
export class Post extends Model<Post> {
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
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  body: string;

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
