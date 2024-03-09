import { Injectable, Inject } from '@nestjs/common';
import { Op } from 'sequelize';
import { Category } from '@/categories/category.entity';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @Inject('TODO_REPOSITORY') private readonly TODO_REPOSITORY: typeof Todo,
  ) {}

  async findByTitle(title: string): Promise<Todo[]> {
    return await this.TODO_REPOSITORY.findAll<Todo>({
      where: { title: { [Op.like]: `%${title}%` } },
      include: [
        {
          model: Category,
          through: { attributes: [] },
        },
      ],
    });
  }

  async findOne(id: number): Promise<Todo | null> {
    return await this.TODO_REPOSITORY.findByPk<Todo>(id, {
      include: [
        {
          model: Category,
          through: { attributes: [] },
        },
      ],
    });
  }

  async findAll(): Promise<Todo[]> {
    return await this.TODO_REPOSITORY.findAll<Todo>({
      include: [
        {
          model: Category,
          through: { attributes: [] },
        },
      ],
    });
  }
}
