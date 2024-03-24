import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Role extends Model<Role> {
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
}
