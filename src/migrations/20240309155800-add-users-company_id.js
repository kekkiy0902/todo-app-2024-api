'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'company_id', {
      allowNull: true,
      type: Sequelize.INTEGER,
      after: 'user_id', // カラムの順番を指定できる
      references: {
        model: 'Companies',
        key: 'id',
      },
      onUpdate: 'CASCADE', // Companiesテーブルのidが更新されたとき、自動でUser側のcompany_idが更新される
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('Users', 'company_id');
  },
};
