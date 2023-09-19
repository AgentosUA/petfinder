import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

import { LoggerService } from './logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private logger: LoggerService) {}
  use(request: Request, response: Response, next: NextFunction): void {
    const timeRequest = Date.now();

    response.on('finish', () => {
      const timeResponse = Date.now();
      const delay = timeResponse - timeRequest;

      this.logger.log(response.statusMessage, '', {
        request: {
          method: request.method,
          body: request.body,
        },
        response: {
          statusCode: response.statusCode,
        },
        delay,
      });
    });
    next();
  }
}
