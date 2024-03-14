import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateTodoDto } from './create-todo.dto';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';

@UseGuards(AuthGuard('jwt')) // コントローラーレベルでAuthGuardを適用
@Controller({
  path: 'todo',
})
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  createTodo(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }

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
