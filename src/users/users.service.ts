import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UsersEntity } from './interfaces/users.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UsersEntity> {
    const saltOrRounds = 10;

    const passwordHashed = await bcrypt.hash(
      createUserDto.password,
      saltOrRounds,
    );

    return this.usersRepository.save({
      ...createUserDto,
      password: passwordHashed,
    });
  }
  async getAllUsers(): Promise<UsersEntity[]> {
    return this.usersRepository.find();
  }
}
