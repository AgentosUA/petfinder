import { Controller, Get, Post } from '@nestjs/common';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getData() {
    return this.usersService.findAll();
  }

  @Post()
  createUser() {
    return this.usersService.createUser();
  }
}
