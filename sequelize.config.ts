import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: 'test1234',
  database: 'todo_db',
  timezone: '+09:00',
};

module.exports = sequelizeConfig;
