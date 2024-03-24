import { Sequelize } from 'sequelize-typescript';
import { Category } from '@/categories/category.entity';
import { Company } from '@/companies/company.entity';
import { Role } from '@/roles/role.entity';
import { TodoCategory } from '@/todo-categories/todoCategory.entity';
import { Todo } from '@/todos/todo.entity';
import { User } from '@/users/user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'db',
        port: 3306,
        username: 'test',
        password: 'test1234',
        database: 'todo_db',
        timezone: '+09:00',
      });
      sequelize.addModels([Todo, User, Company, Category, TodoCategory, Role]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
