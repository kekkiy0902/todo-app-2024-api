'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          user_id: 'test1234',
          role_id: 1,
          company_id: 1,
          password:
            '$2b$10$Gre5b7k4SPz4JFYqXIfwBO7ppaRp3fn1Wijyy031X/uHoShJLJ1AO',
          name: '株式会社テストA システム管理者',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 'test5678',
          role_id: 2,
          company_id: 2,
          password:
            '$2b$10$Gre5b7k4SPz4JFYqXIfwBO7ppaRp3fn1Wijyy031X/uHoShJLJ1AO',
          name: '合同会社テストB マネージャー',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 'test0000',
          role_id: 3,
          company_id: 2,
          password:
            '$2b$10$Gre5b7k4SPz4JFYqXIfwBO7ppaRp3fn1Wijyy031X/uHoShJLJ1AO',
          name: '合同会社テストB メンバー',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 'test1111',
          role_id: 2,
          company_id: 3,
          password:
            '$2b$10$Gre5b7k4SPz4JFYqXIfwBO7ppaRp3fn1Wijyy031X/uHoShJLJ1AO',
          name: '有限会社テストC マネジャー',
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
