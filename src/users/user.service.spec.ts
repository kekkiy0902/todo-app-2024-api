import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { mockUsers } from '../../tests/mocks/user.mock';

const mockUserRepository = {
  findAll: jest.fn().mockResolvedValue(mockUsers),
  findByPk: jest.fn().mockResolvedValue(mockUsers[0]),
};

const testModuleConfig = {
  providers: [
    UserService,
    {
      provide: 'USER_REPOSITORY',
      useValue: mockUserRepository,
    },
  ],
};

describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule =
      await Test.createTestingModule(testModuleConfig).compile();

    userService = module.get<UserService>(UserService);
  });

  describe('.findAll', () => {
    it('すべてのユーザーとそれらに紐づく会社情報が取得できること', async () => {
      const users = await userService.findAll();

      expect(users).toHaveLength(2);
      expect(mockUserRepository.findAll).toHaveBeenCalled();
      expect(users[0]).toEqual(mockUsers[0]);
      expect(users[1]).toEqual(mockUsers[1]);
    });
  });

  describe('.findOneWithCompanyName', () => {
    it('IDに紐づくユーザーとその会社情報が取得できること', async () => {
      const user = await userService.findOneWithCompanyName(1);

      expect(mockUserRepository.findByPk).toHaveBeenCalledWith(
        1,
        expect.any(Object),
      );
      expect(user).toEqual(mockUsers[0]);
    });
  });
});
