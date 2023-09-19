import { Global, Module } from '@nestjs/common';

import { LoggerService } from './logger.service';
import { LoggerWinstonService } from './logger-winston.service';

const DILogger = Symbol.for('logger');

@Global()
@Module({
  providers: [
    LoggerService,
    LoggerWinstonService,
    {
      provide: DILogger,
      useClass: LoggerService,
    },
  ],
  exports: [DILogger, LoggerService],
})
export class Logger {}
