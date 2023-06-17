import { Injectable, Inject, Logger, NotFoundException } from '@nestjs/common';

import { Post } from './post.entity';
import { PostDto } from '../dto/post.dto';
import { POST_REPOSITORY } from '../../core/constants';

@Injectable()
export class PostsService {
  private readonly logger = new Logger(PostsService.name);
  constructor(
    @Inject(POST_REPOSITORY) private readonly postRepository: typeof Post,
  ) {}

  async create(post: PostDto): Promise<Post> {
    console.log('hii', post);
    const data = await this.postRepository.findOne({
      where: { title: post.title },
    });
    console.log('hello', data);
    if (!data) {
      return await this.postRepository.create<Post>({ ...post });
    } else {
      // throw new Error('post already exist....');
      throw new NotFoundException("This Post doesn't exist");
      console.log('post is already exist..');
    }
  }

  async findAll(): Promise<Post[]> {
    this.logger.log(
      'Doing something...',
      await this.postRepository.findAll<Post>(),
    );
    return await this.postRepository.findAll<Post>();
  }

  async findOne(id): Promise<Post> {
    return await this.postRepository.findOne({
      where: { id },
    });
  }

  //   async delete(id, userId) {
  //     return await this.postRepository.destroy({ where: { id, userId } });
  //   }

  //   async update(id, data, userId) {
  //     const [numberOfAffectedRows, [updatedPost]] = await this.postRepository.update({ ...data }, { where: { id, userId }, returning: true });
  //     return { numberOfAffectedRows, updatedPost };
  //   }
}
