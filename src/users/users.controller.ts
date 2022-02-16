import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  constructor(private readonly userservice: UsersService) {}

  @Post()
  insertUser(
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('email') email: string,
  ) {
    const user = this.userservice.insertUser(name, age, email);
    return user;
  }
  @Get()
  getAllUsers() {
    return this.userservice.getUsers();
  }

  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    return this.userservice.getUser(userId);
  }

  @Put(':userId')
  updateUser(
    @Param('userId') userId: string,
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('email') email: string,
  ) {
    return this.userservice.updateUser(userId, name, age, email);
  }
  @Delete(':userId')
  deleteUser(@Param('userId') userId: string) {
    this.userservice.deleteUser(userId);
  }
}
