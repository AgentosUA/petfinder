import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { PostEntity } from './post.entity';

export enum UserRoleEnum {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    name: 'full_name'
  })
  fullName: string;

  @Column('enum', {
    enum: UserRoleEnum,
    default: UserRoleEnum.USER
  })
  role: UserRoleEnum;

  // TODO: добавить остальные поля

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  /**
   * RELATIONS
   */

  @OneToMany(() => PostEntity, (post) => post.user, {
    cascade: true,
  })
  posts?: PostEntity[];
}
