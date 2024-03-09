import { Table, Column, Model, DataType } from 'sequelize-typescript';

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
}
