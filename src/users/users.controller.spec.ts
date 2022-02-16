import { UserController } from './users.controller';
import { UsersService } from './users.service';

describe('CatsController', () => {
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

      expect(await usersController.getAllUsers()).toBe(users);
    });
    it('should grab a user by id', async () => {
      const user = {
        id: expect.any(Number),
        name: 'Bob',
        age: 20,
        email: 'Bob@gmail.com',
      };
      jest.spyOn(usersService, 'getUser').mockImplementation(() => user);

      expect(await usersController.getUser(user.id)).toBe(user);
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
      ).toBe(user);
    });
  });
});
