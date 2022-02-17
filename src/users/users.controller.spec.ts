import { UserController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersController: UserController;
  let usersService: UsersService;

  beforeEach(() => {
    usersService = new UsersService();
    usersController = new UserController(usersService);
  });

  describe('findAll', () => {
    it('should return users', async () => {
      const users = [expect.any(Number), 'Eli', 19, 'ElijahP@gmail.com'];
      jest.spyOn(usersService, 'getUsers').mockImplementation(() => users);

      expect(await usersController.getAllUsers()).toEqual(users);
    });
    it('should grab a user by id', async () => {
      const user = {
        id: expect.any(Number),
        name: 'Bob',
        age: 20,
        email: 'Bob@gmail.com',
      };
      jest.spyOn(usersService, 'getUser').mockImplementation(() => user);

      expect(await usersController.getUser(user.id)).toEqual(user);
    });
    it('should create a user', async () => {
      const user = {
        name: 'Bob',
        age: 20,
        email: 'Bob@gmail.com',
      };
      jest.spyOn(usersService, 'insertUser').mockImplementation(() => user);

      expect(
        await usersController.insertUser(user.name, user.age, user.email),
      ).toEqual(user);
    });
    it('should update existing user', async () => {
      const user = {
        id: expect.any(Number),
        name: 'Bob',
        age: 20,
        email: 'Bob@gmail.com',
      };
      const updatedUser = {
        id: expect.any(Number),
        name: 'Bob',
        age: 24,
        email: 'Bob@gmail.com',
      };

      jest.spyOn(usersService, 'insertUser').mockImplementation(() => user);
      jest
        .spyOn(usersService, 'updateUser')
        .mockImplementation(() => updatedUser);

      expect(
        await usersController.updateUser(
          user.id,
          updatedUser.name,
          updatedUser.age,
          updatedUser.email,
        ),
      ).toEqual({
        ...updatedUser,
      });
    });
    it('should delete a user', async () => {
      const user = {
        id: expect.any(Number),
        name: 'Bob',
        age: 20,
        email: 'Bob@gmail.com',
      };
      jest.spyOn(usersService, 'insertUser').mockImplementation(() => user);
      jest.spyOn(usersService, 'deleteUser').mockImplementation(() => user);

      expect(await usersController.getUser(user.id)).toEqual(undefined);
    });
  });
});
