import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  async createUser() {
    return this.userModel.create({
      nickname: 'test',
      email: 'test',
      firstName: 'test',
      lastName: 'test',
      isActive: true,
    })
  }


  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}