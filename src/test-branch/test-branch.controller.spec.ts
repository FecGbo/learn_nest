import { Test, TestingModule } from '@nestjs/testing';
import { TestBranchController } from './test-branch.controller';
import { TestBranchService } from './test-branch.service';

describe('TestBranchController', () => {
  let controller: TestBranchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestBranchController],
      providers: [TestBranchService],
    }).compile();

    controller = module.get<TestBranchController>(TestBranchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
