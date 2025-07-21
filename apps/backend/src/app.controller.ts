import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getBackend(): object {
    return this.appService.getBackend();
  }
  @Post('/todo')
  postTodos(@Body() req: { username: string; password: string }): object {
    return this.appService.postTodos(req);
  }
}
