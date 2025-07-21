import { Body, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getBackend(): object {
    return { msg: 'Todo-App - backend' };
  }

  postTodos(@Body() req: { username: string; password: string }): object {
    const { username, password } = req;
    return {
      msg: `${username} : ${password}`,
    };
  }
}
