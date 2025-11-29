import { Controller, Get, Post } from '@nestjs/common';

@Controller('/api/v1/user')
export class UserController {
  @Get('/sample')
  getUser() {
    return { id: 1, name: 'John Doe' };
  }

  @Post()
  createUser() {
    return { message: 'User created successfully' };
  }
}
