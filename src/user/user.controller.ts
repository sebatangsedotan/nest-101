import { Controller, Get, Param, Post, Query, Req } from '@nestjs/common';
import express from 'express';

@Controller('/api/v1/user')
export class UserController {
  @Get('/:id')
  getUserById(@Req() request: express.Request): string {
    return `Get user with ID: ${request.params.id}`;
  } // GET: /api/v1/user/290874239908243

  @Get('/:id-param')
  getUserByIdParam(@Param('id') id: string): string {
    return `Get user with ID: ${id}`;
  } // GET: /api/v1/user/290874239908243

  @Get('/hello')
  sayHello(@Query('name') name: string): string {
    return `Hello, ${name}!`;
  } // GET: /api/v1/user/hello?name=NestJS

  @Get('/hello2')
  sayHello2(
    @Query('firstname') firstname: string,
    @Query('lastname') lastname: string,
  ): string {
    return `Hello, ${firstname} ${lastname}!`;
  } // GET: /api/v1/user/hello2?firstname=John&lastname=Doe

  @Get('/sample')
  getUser() {
    return { id: 1, name: 'John Doe' };
  }

  @Post()
  createUser() {
    return { message: 'User created successfully' };
  }
}
