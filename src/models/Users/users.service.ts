import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from '../../core/constants';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof Users,
  ) {}

  async findAll(): Promise<any> {
    await this.userRepository.findAll<Users>();
  }
}
