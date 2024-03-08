'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          user_id: 'test1234',
          password:
            '$2b$10$Gre5b7k4SPz4JFYqXIfwBO7ppaRp3fn1Wijyy031X/uHoShJLJ1AO',
          name: 'テストユーザー',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
