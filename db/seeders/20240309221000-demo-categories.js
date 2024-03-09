'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'Categories',
      [
        {
          name: '仕事',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'プライベート',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: '旅行',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
