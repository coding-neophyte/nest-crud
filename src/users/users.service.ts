import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  private users: User[] = [];

  insertUser(name: string, age: number, email: string) {
    const id = uuidv4();
    const newUser = new User(id, name, age, email);
    this.users.push(newUser);
    return id;
  }
  getUsers() {
    return [...this.users];
  }
  getUser(id: string) {
    return this.getUserById(id)[0];
  }
  updateUser(id: string, name: string, age: number, email: string) {
    const [targetUser, index] = this.getUserById(id);
    const updatedUserParams = { ...targetUser, name, age, email };
    const updatedUser = new User(
      id,
      updatedUserParams.name,
      updatedUserParams.age,
      updatedUserParams.email,
    );
    this.users[index] = updatedUser;
  }
  deleteUser(id: string) {
    const [target, index] = this.getUserById(id);
    this.users.splice(index, 1);
  }
  private getUserById(id: string): [User, number] {
    const index = this.users.findIndex((user) => user.id === id);
    return [this.users[index], index];
  }
}
