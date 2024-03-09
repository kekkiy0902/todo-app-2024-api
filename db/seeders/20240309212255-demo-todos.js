'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Todos',
      [
        {
          title: 'はじめてのTODO',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: '仕事のTODO',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: '旅行のTODO',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: '料理のTODO',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: '勉強のTODO',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Todos', null, {});
  },
};
