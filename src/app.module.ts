import { Module } from '@nestjs/common';
import { DatabaseModule } from './config/database.module';
import { PostsModule } from './models/Post/post.module';
import { UsersModule } from './models/Users/users.module';

@Module({
  imports: [DatabaseModule, PostsModule, UsersModule],
})
export class AppModule {}
//import from second file and use in this file
