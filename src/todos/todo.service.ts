import { Injectable, Inject } from '@nestjs/common';
import { Todo } from './todo.entity';
import Sequelize from 'sequelize';

@Injectable()
export class TodoService {
  constructor(
    @Inject('TODO_REPOSITORY') private readonly TODO_REPOSITORY: typeof Todo,
  ) {}

  async findAll(): Promise<Todo[]> {
    return await this.TODO_REPOSITORY.findAll<Todo>();
  }

  async findOne(id: number): Promise<Todo | null> {
    return await this.TODO_REPOSITORY.findByPk<Todo>(id);
  }

  async findByTitle(title: string): Promise<Todo[]> {
    return await this.TODO_REPOSITORY.findAll<Todo>({
      where: { title: { [Sequelize.Op.like]: `%${title}%` } },
    });
  }
}
