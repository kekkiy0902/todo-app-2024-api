import { Controller, Get, Param, Query } from '@nestjs/common';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';

@Controller({
  path: 'todo',
})
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('/search')
  findByTitle(@Query('title') title: string): Promise<Todo[]> {
    return this.todoService.findByTitle(title);
  }

  @Get('/:id')
  getTodo(@Param('id') id: string): Promise<Todo | null> {
    return this.todoService.findOne(+id);
  }

  @Get()
  getTodos(): Promise<Todo[]> {
    return this.todoService.findAll();
  }
}
