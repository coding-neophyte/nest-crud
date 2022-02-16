import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userservice: UsersService) {}

  @Get()
  getUsers() {
    return 'Reached Get Route';
  }

  @Post()
  insertUser(
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('email') email: string,
  ) {
    const userId = this.userservice.insertUser(name, age, email);
    return { id: userId };
  }
}
