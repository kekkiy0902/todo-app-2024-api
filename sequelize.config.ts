import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Todo } from './src/todos/todo.entity';
import { User } from './src/users/user.entity';

export const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: 'test1234',
  database: 'todo_db',
  models: [Todo, User],
  timezone: '+09:00',
};

module.exports = sequelizeConfig;
