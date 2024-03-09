import { Module } from '@nestjs/common';
import { CategoryModule } from './categories/category.module';
import { CompanyModule } from './companies/company.module';
import { DatabaseModule } from './database/database.module';
import { TodoModule } from './todos/todo.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    DatabaseModule,
    TodoModule,
    CompanyModule,
    UserModule,
    CategoryModule,
  ],
})
export class AppModule {}
