import { Test, TestingModule } from '@nestjs/testing';
import { TestBranchService } from './test-branch.service';

describe('TestBranchService', () => {
  let service: TestBranchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestBranchService],
    }).compile();

    service = module.get<TestBranchService>(TestBranchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
