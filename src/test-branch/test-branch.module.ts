import { Module } from '@nestjs/common';
import { TestBranchService } from './test-branch.service';
import { TestBranchController } from './test-branch.controller';

@Module({
  controllers: [TestBranchController],
  providers: [TestBranchService],
})
export class TestBranchModule {}
