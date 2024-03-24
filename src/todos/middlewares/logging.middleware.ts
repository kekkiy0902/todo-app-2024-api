import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  // useメソッドはリクエストの処理中に自動的に呼び出される
  use(req: Request, res: Response, next: NextFunction) {
    console.log('logging-middleware: Hello!');

    next(); //次のミドルウェアまたはルートハンドラへ処理が移る
  }
}
