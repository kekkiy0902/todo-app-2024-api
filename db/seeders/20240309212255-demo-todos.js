'use strict';

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'Todos',
      [
        {
          title: 'はじめてのTODO',
          description:
            'ここにはTODOに関する説明が入ります。\nTODOを消化できるように頑張りましょう。',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: '仕事のTODO',
          description:
            'ここにはTODOに関する説明が入ります。\nTODOを消化できるように頑張りましょう。',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: '旅行のTODO',
          description:
            'ここにはTODOに関する説明が入ります。\nTODOを消化できるように頑張りましょう。',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: '料理のTODO',
          description:
            'ここにはTODOに関する説明が入ります。\nTODOを消化できるように頑張りましょう。',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          title: '勉強のTODO',
          description:
            'ここにはTODOに関する説明が入ります。\nTODOを消化できるように頑張りましょう。',
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
