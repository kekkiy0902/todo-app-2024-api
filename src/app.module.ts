import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { TodoModule } from './todos/todo.module';
import { CompanyModule } from './companies/company.module';
import { UserModule } from './users/user.module';
import { CategoryModule } from './categories/category.module';

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
