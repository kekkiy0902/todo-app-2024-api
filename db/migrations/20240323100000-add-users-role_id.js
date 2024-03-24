'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'role_id', {
      type: Sequelize.INTEGER,
      after: 'user_id',
      allowNull: false,
      defaultValue: 2,
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('Users', 'role_id');
  },
};
