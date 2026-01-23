import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestBranchService } from './test-branch.service';
import { CreateTestBranchDto } from './dto/create-test-branch.dto';
import { UpdateTestBranchDto } from './dto/update-test-branch.dto';

@Controller('test-branch')
export class TestBranchController {
  constructor(private readonly testBranchService: TestBranchService) {}

  @Post()
  create(@Body() createTestBranchDto: CreateTestBranchDto) {
    return this.testBranchService.create(createTestBranchDto);
  }

  @Get()
  findAll() {
    return this.testBranchService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testBranchService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestBranchDto: UpdateTestBranchDto) {
    return this.testBranchService.update(+id, updateTestBranchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testBranchService.remove(+id);
  }
}
