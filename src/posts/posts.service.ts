import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
@Injectable()
export class PostsService {

  constructor(
    @InjectRepository(Post)
    private repo:Repository<Post>,

    @InjectRepository(User)
    private userRepo:Repository<User>
  ){

  }


  async create(createPostDto:Partial<CreatePostDto>) {
    const {userId,...postDetail}=createPostDto;
    const user=await this.userRepo.findOne({where:{id:userId}});
      if (!user) {
    throw new Error('User not found');
  }
    const newPost=this.repo.create({
      ...postDetail,
      user:{id:userId} as any,

    })

    return this.repo.save(newPost);
  }

  findAll() {
    return this.repo.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} post`;
  // }

  // update(id: number, updatePostDto: UpdatePostDto) {
  //   return `This action updates a #${id} post`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} post`;
  // }
}
