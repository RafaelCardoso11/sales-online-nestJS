import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    return this.usersService.createUser(createUser);
  }
  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }
}
