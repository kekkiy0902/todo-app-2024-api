import { Category } from '@/categories/category.entity';
import { Todo } from './todo.entity';

export const todoProviders = [
  {
    provide: 'TODO_REPOSITORY',
    useValue: Todo,
  },
  {
    provide: 'CATEGORY_REPOSITORY',
    useValue: Category,
  },
];
