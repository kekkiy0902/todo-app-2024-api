import { Injectable, Inject } from '@nestjs/common';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @Inject('TODO_REPOSITORY') private readonly TODO_REPOSITORY: typeof Todo,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.TODO_REPOSITORY.findAll<Todo>();
  }
}
