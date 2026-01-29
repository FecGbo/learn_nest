import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { diskStorage, Multer } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  
  @Get()
  findAll() {
    return this.usersService.findAll();
  }



  @Get(':id')

  findOne(@Param('id',ParseIntPipe)id:number) {
    // + convert to int 
    return this.usersService.findOne(id);
  }

   
  @Patch(':id')
  update(@Param('id')id:string,@Body()UpdateUserDto:UpdateUserDto){
    return this.usersService.update(+id,UpdateUserDto);
  }

  @Delete(':id')
    remove(@Param('id')id:string){
      return this.usersService.remove(+id);     
    }


    // @Post(':id/profile')
    // async updateUserProfile(
    //   @Param('id') id: string,
    //   @Body() profileData: Partial<CreateUserDto['profile']>
    // ) {
    //   return this.usersService.updateUserProfile(+id, profileData);
    // }

    @Patch(':id/upload')
    @UseInterceptors(FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/profile-images',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
          callback(null, `profile-${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
          return callback(new Error('Only image files are allowed!'), false);
        }
        callback(null, true);
      }
    }))
    async updateProfileImage(
      @Param('id', ParseIntPipe) id: number,
      @UploadedFile() file: Express.Multer.File, 
    ) {
      if (!file) {
        throw new Error('No file uploaded');
      }
      return this.usersService.updateUserProfile(id, file.filename);
    }
}