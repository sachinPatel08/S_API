'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'deleted_at_');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'deleted_at_');
  },
};
