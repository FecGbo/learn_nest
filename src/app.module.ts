import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { ProfilesModule } from './profiles/profiles.module';
import { PostsModule } from './posts/posts.module';
import { TagsModule } from './tags/tags.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cafeshop',
      autoLoadEntities: true,
      synchronize: false,
    }),
    UsersModule,
    ProductsModule,
    ProfilesModule,
    PostsModule,
    TagsModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
