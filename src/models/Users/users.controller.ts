import { Controller, Get } from '@nestjs/common';
import { Users } from './users.entity';
import { UsersService } from './users.service';
import { UserDto } from '../dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }
}
