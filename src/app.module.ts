import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './categories/category.module';
import { CompanyModule } from './companies/company.module';
import { DatabaseModule } from './database/database.module';
import { TodoModule } from './todos/todo.module';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    DatabaseModule,
    AuthModule,
    TodoModule,
    CompanyModule,
    UserModule,
    CategoryModule,
  ],
})
export class AppModule {}
