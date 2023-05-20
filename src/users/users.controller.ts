import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    return { ...createUser, password: undefined };
  }
  @Get()
  async getAllUsers() {
    return JSON.stringify({ test: 'abc' });
  }
}
