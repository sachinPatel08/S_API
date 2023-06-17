import { DataType } from 'sequelize-typescript';

export async function up(sequelize) {
  await sequelize.queryInterface.createTable('Post', {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataType.STRING,
      allowNull: false,
    },
    body: {
      type: DataType.TEXT,
      allowNull: false,
    },
    createdAt: {
      field: 'created_at_',
      allowNull: false,
    },
    updatedAt: {
      field: 'updated_at_',
      allowNull: true,
    },
    deletedAt: {
      field: 'deleted_at_',
      allowNull: true,
    },
  });
}
export async function down(sequelize) {
  return sequelize.queryInterface.dropTable('Post');
}
