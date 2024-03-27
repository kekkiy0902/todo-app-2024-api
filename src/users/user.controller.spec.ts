import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { mockUsers } from '../../tests/mocks/user.mock';

const mockUserService = {
  findAll: jest.fn().mockResolvedValue(mockUsers),
};

const testModuleConfig = {
  controllers: [UserController],
  providers: [
    {
      provide: UserService,
      useValue: mockUserService,
    },
  ],
};

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const module: TestingModule =
      await Test.createTestingModule(testModuleConfig).compile();

    userController = module.get<UserController>(UserController);
  });

  describe('.getUsers', () => {
    it('すべてのユーザーが取得できること', async () => {
      const result = await userController.getUsers();

      expect(result).toEqual(mockUsers);
      expect(mockUserService.findAll).toHaveBeenCalled();
    });
  });
});
