import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Todo } from '../todos/todo.entity';
import { Category } from '../categories/category.entity';

@Table({
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class TodoCategory extends Model<TodoCategory> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @ForeignKey(() => Todo)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  todo_id: number;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  category_id: number;
}
