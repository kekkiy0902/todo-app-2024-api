'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Todos', 'description', {
      allowNull: false,
      type: Sequelize.STRING,
      after: 'title',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('Todos', 'description');
  },
};
