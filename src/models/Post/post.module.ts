import { Module } from '@nestjs/common';

import { PostsService } from './post.services';
import { PostsController } from './post.controller';
import { postsProviders } from './post.providers';

@Module({
  providers: [PostsService, ...postsProviders],
  controllers: [PostsController],
})
export class PostsModule {}
