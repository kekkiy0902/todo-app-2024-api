import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TodoModule } from './todos/todo.module';
import { CompanyModule } from './companies/company.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [DatabaseModule, TodoModule, CompanyModule, UserModule],
})
export class AppModule {}
