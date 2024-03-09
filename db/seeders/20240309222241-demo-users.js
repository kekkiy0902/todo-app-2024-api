'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          user_id: 'test1234',
          company_id: 1,
          password:
            '$2b$10$Gre5b7k4SPz4JFYqXIfwBO7ppaRp3fn1Wijyy031X/uHoShJLJ1AO',
          name: 'テストユーザー1',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 'test5678',
          company_id: 1,
          password:
            '$2b$10$Gre5b7k4SPz4JFYqXIfwBO7ppaRp3fn1Wijyy031X/uHoShJLJ1AO',
          name: 'テストユーザー2',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 'test0000',
          company_id: 3,
          password:
            '$2b$10$Gre5b7k4SPz4JFYqXIfwBO7ppaRp3fn1Wijyy031X/uHoShJLJ1AO',
          name: 'テストユーザー3',
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
