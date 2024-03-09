'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'TodoCategories',
      [
        {
          todo_id: 1,
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          todo_id: 1,
          category_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          todo_id: 2,
          category_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          todo_id: 2,
          category_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          todo_id: 3,
          category_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          todo_id: 4,
          category_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          todo_id: 5,
          category_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('TodoCategories', null, {});
  },
};
