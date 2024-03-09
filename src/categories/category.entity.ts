import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { TodoCategory } from '@/todo-categories/todoCategory.entity';
import { Todo } from '@/todos/todo.entity';

@Table({
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Category extends Model<Category> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @BelongsToMany(() => Todo, () => TodoCategory)
  todos: Todo[];
}
