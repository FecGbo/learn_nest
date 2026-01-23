import { Injectable } from '@nestjs/common';
import { CreateTestBranchDto } from './dto/create-test-branch.dto';
import { UpdateTestBranchDto } from './dto/update-test-branch.dto';

@Injectable()
export class TestBranchService {
  create(createTestBranchDto: CreateTestBranchDto) {
    return 'This action adds a new testBranch';
  }

  findAll() {
    return `This action returns all testBranch`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testBranch`;
  }

  update(id: number, updateTestBranchDto: UpdateTestBranchDto) {
    return `This action updates a #${id} testBranch`;
  }

  remove(id: number) {
    return `This action removes a #${id} testBranch`;
  }
}
