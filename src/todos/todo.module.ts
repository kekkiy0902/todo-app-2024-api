import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
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
    // TodoController全体のルートハンドラにミドルウェアを適用
    // consumer.apply(LoggingMiddleware).forRoutes(TodoController);

    consumer.apply(LoggingMiddleware).forRoutes(
      // 特定のルートハンドラにミドルウェアを適用
      { path: 'todo', method: RequestMethod.GET },
      { path: 'todo/:id', method: RequestMethod.GET },
    );
  }
}
