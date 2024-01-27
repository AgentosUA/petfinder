import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  nickname: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}