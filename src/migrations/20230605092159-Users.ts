import { DataType } from 'sequelize-typescript';

export async function up(sequelize) {
  await sequelize.queryInterface.createTable('Users', {
    id: {
      type: DataType.UUID,
      defaultValue: DataType.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: DataType.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataType.STRING,
      allowNull: false,
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
    },
    gender: {
      type: DataType.STRING,
      allowNull: true,
    },
    age: {
      type: DataType.INTEGER,
      allowNull: true,
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
  return sequelize.queryInterface.dropTable('Users');
}
