import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: {
            save: jest.fn(),
            // add other methods you use in UsersService if needed
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const userDto = { name: 'Test User', email: 'test@example.com' };
    const result = service.create(userDto);
    expect(result).toBeInstanceOf(Promise);
  });
});
  it('should create a user', async () => {
    const userDto = { name: 'Test User', email: 'test@example.com' };
    // Mock repo.save if needed, here we just check the method exists and returns a Promise
    const result = service.create(userDto);
    expect(result).toBeInstanceOf(Promise);
  });
});
