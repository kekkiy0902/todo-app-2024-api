import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Controller({
  path: 'todo',
})
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos(): Promise<Todo[]> {
    return this.todoService.findAll();
  }
}
