import { Injectable, Inject } from '@nestjs/common';
import { Category } from './category.entity';
import { Todo } from '../todos/todo.entity';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private readonly CATEGORY_REPOSITORY: typeof Category,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.CATEGORY_REPOSITORY.findAll<Category>({
      include: [
        {
          model: Todo,
          through: { attributes: [] },
        },
      ],
    });
  }
}
