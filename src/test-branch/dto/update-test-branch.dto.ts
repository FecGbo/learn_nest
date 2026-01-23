import { PartialType } from '@nestjs/mapped-types';
import { CreateTestBranchDto } from './create-test-branch.dto';

export class UpdateTestBranchDto extends PartialType(CreateTestBranchDto) {}
