import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Op } from 'sequelize';
import { Category } from '@/categories/category.entity';
import { CreateTodoDto } from './create-todo.dto';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @Inject('TODO_REPOSITORY') private readonly TODO_REPOSITORY: typeof Todo,
    @Inject('CATEGORY_REPOSITORY')
    private readonly CATEGORY_REPOSITORY: typeof Category,
  ) {}

  async createTodoWithCategories(createTodoDto: CreateTodoDto) {
    const transaction = await this.TODO_REPOSITORY.sequelize.transaction();

    try {
      const todo = await this.TODO_REPOSITORY.create(
        {
          title: createTodoDto.title,
          description: createTodoDto.description,
        },
        { transaction },
      );

      const categories = await this.CATEGORY_REPOSITORY.findAll({
        where: { id: createTodoDto.category_ids },
        transaction,
      });

      if (categories.length === 0) {
        throw new NotFoundException('カテゴリが存在しません。');
      }

      await todo.$set('categories', categories, { transaction });
      await transaction.commit();

      return todo;
    } catch (error) {
      await transaction.rollback();

      throw error;
    }
  }

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
