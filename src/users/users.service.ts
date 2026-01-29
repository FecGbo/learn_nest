import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    // Respository- save,delete,update
    @InjectRepository(User)
    private repo:Repository<User>
  ){

  }
 // Partial- for example if we have 4 column in databasase user can enter less column.
 //coz we have auto generate id.
  create(data:Partial<CreateUserDto>){
    return this.repo.save(data);
  }

  findAll(){
    // profle from user entity
    return this.repo.find({relations:['profile','posts','posts.tags']});
  }


//   async findAll() {
//   return this.repo.createQueryBuilder('user')
//     .leftJoinAndSelect('user.profile', 'profile')
//     .select([
//       'user.id',
//       'user.name', // add other user fields you want to include
//       'profile.phone',
//     ])
//     .getMany();
// }



  // findOne(id:number){
  //   const user=this.repo.findOneBy({id});

  //   if(!user)throw new NotFoundException("User Not Found!");
  //   return user;

  // }

 async findOne(id: number) {
  const user = await this.repo.findOne({ where: { id }, relations: ['profile', 'posts', 'posts.tags'] });
  if (!user) throw new NotFoundException("User Not Found!");
  return user;
}

  async update(id:number,updateUserDto:UpdateUserDto){
    const user=await this.repo.preload(
      {
        id:id,
        ...updateUserDto,
      }
    );

    if(!user) throw new NotFoundException("User Not Found");


    return this.repo.save(user);

  }



  async remove(id:number){
    const user=await this.repo.findOneBy({id:id});
      if(!user) throw new NotFoundException("User Not Found");
      return this.repo.delete(user);

  }


  // async updateUserProfile(userId: number, profileData: Partial<CreateUserDto['profile']>) {
  //   const user = await this.repo.findOne({ where: { id: userId }, relations: ['profile'] });
  //   if (!user) {
  //     throw new NotFoundException('User not found');
  //   }
  //   if (!user.profile) {
  //     user.profile = this.repo.manager.create('Profile', profileData);
  //   } else {
  //     Object.assign(user.profile, profileData);
  //   }
  //   await this.repo.manager.save(user.profile);
  //   return user.profile;
  // }


  async updateUserProfile(userId:number,filename:string){
    const user=await this.findOne(userId);
    user.profile.image=filename;
    return this.repo.save(user);

  }
}