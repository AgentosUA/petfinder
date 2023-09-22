import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
  JoinColumn
} from 'typeorm';
import { UserEntity } from './user.entity';
  
  
  @Entity()
  export class PostEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column('uuid', {
      name: 'user_id',
      comment: 'Reference',
    })
    userId: string;
  
    // TODO: добавить остальные поля
  
    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;
  
    /**
     * RELATIONS
     */
  
    @ManyToMany(() => UserEntity, (user) => user.posts)
    @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
    user: UserEntity;
  }
  