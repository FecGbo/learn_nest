import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    // Respository- save,delete
    @InjectRepository(User)
    private repo:Repository<User>
  ){

  }
 // Partial- for example if we have 4 column in databasase user can enter less column.
  create(data:Partial<User>){
    return this.repo.save(data);
  }

  findAll(){
    return this.repo.find();
  }
}
