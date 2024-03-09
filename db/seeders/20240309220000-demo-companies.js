'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Companies',
      [
        {
          name: '株式会社テストA',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: '合同会社テストB',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: '有限会社テストC',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Companies', null, {});
  },
};
