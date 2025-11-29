import { Controller, Get, Post, Req } from '@nestjs/common';
import express from 'express';

@Controller('/api/v1/user')
export class UserController {
  @Get('/:id')
  getUserById(@Req() request: express.Request): string {
    return `Get user with ID: ${request.params.id}`;
  }

  @Get('/sample')
  getUser() {
    return { id: 1, name: 'John Doe' };
  }

  @Post()
  createUser() {
    return { message: 'User created successfully' };
  }
}
