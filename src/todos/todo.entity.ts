import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { Category } from '@/categories/category.entity';
import { TodoCategory } from '@/todo-categories/todoCategory.entity';

@Table({
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Todo extends Model<Todo> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @BelongsToMany(() => Category, () => TodoCategory)
  categories: Category[];
}
