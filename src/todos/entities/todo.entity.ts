import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Todo extends Model<Todo> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;
}
