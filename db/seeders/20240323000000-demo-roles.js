'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'システム管理者',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'マネージャー',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'メンバー',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Roles', null, {});
  },
};
