import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { DatabaseModule } from '@/database/database.module';
import { LoggingMiddleware } from './middlewares/logging.middleware';
import { TodoController } from './todo.controller';
import { todoProviders } from './todo.providers';
import { TodoService } from './todo.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TodoController],
  providers: [TodoService, ...todoProviders],
})
export class TodoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes(TodoController);
  }
}
