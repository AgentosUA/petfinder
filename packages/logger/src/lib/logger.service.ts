import {
  Injectable,
  LoggerService as NestLoggerService,
  Scope
} from '@nestjs/common';
import { isObject } from '@nestjs/common/utils/shared.utils';
import { Logger } from 'winston';

import { LoggerLevelsEnum } from './enums/logger-levels.enum';
import { LoggerWinstonService } from './logger-winston.service';

const RESTRICTED_FIELDS = new Set([
  'cookie',
  'pass',
  'password',
  'accessToken',
  'refreshToken',
  'hash',
]);

export const replaceRestrictedFields = (object: object): object => {
  const length =
    Object.keys(object).length > 5 ? 5 : Object.keys(object).length;
  for (let index = 0; index < length; index++) {
    const key = Object.keys(object)[index];
    let item = object[key];

    if (Array.isArray(key)) {
      for (let index = 0; index < item.length; index++)
        item[index] = replaceRestrictedFields(item[index]);
    } else if (item && typeof item === 'object') {
      item = replaceRestrictedFields(item);
    }

    if (RESTRICTED_FIELDS.has(key) && typeof item === 'string')
      item = 'XXXXXXXXXXX';
  }
  return object;
};

export const replacer = (key: string, value: string): any => {
  if (RESTRICTED_FIELDS.has(key)) {
    return 'XXXXXX';
  }
  return value;
};

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService implements NestLoggerService {
  private context: string;
  private readonly logger: Logger;

  constructor(loggerWinstonService: LoggerWinstonService) {
    this.logger = loggerWinstonService.logger;
  }

  private static getFullLogMessage(
    method: string,
    message: string | Record<string, any> | []
  ): string {
    method = method.length === 0 ? method : `${method}()`;
    return `${method}  ${
      typeof message === 'object' ? JSON.stringify(message) : message
    }`;
  }

  public setContext(context = 'System'): void {
    this.context = context;
  }

  public info(
    method: string,
    message?: string | Record<string, any> | [],
    meta?: string | Record<string, any> | unknown
  ): void {
    this.callMethod(LoggerLevelsEnum.INFO, method, message, meta);
  }

  public error(
    method: string,
    error: string | Error,
    meta?: string | Record<string, any> | Error,
    context?: string
  ): void {
    if (error instanceof Error) {
      if (isObject(error.message)) {
        error.message = JSON.stringify(replaceRestrictedFields(error.message));
      }
      this.logger.error(
        LoggerService.getFullLogMessage(
          method,
          `Error: ${JSON.stringify(error.message)}`
        ),
        {
          context: context || this.context,
          stack: error.stack,
          meta,
        }
      );

      return;
    }

    const errorMeta: any = {};
    if (meta) {
      if (typeof meta === 'string') {
        errorMeta.stack = meta;
      } else if (meta instanceof Error) {
        if (isObject(meta.message)) {
          meta.message = JSON.stringify(replaceRestrictedFields(meta.message));
        }
        errorMeta.stack = meta.stack;
      } else {
        errorMeta.meta = meta;
      }
    }
    this.logger.error(
      LoggerService.getFullLogMessage(method, `Error: ${error}`),
      {
        context: this.context,
        ...replaceRestrictedFields(errorMeta),
      }
    );
  }

  public warn(
    method: string,
    message: string | Record<string, any> | [],
    meta?: string | Record<string, any>
  ): void {
    this.callMethod(LoggerLevelsEnum.WARN, method, message, meta);
  }

  public debug(
    method: string,
    message: string | Record<string, any> | [],
    meta?: string | Record<string, any>
  ): void {
    this.callMethod(LoggerLevelsEnum.DEBUG, method, message, meta);
  }

  public verbose(
    method: string,
    message: string | Record<string, any> | [],
    meta?: string | Record<string, any>
  ): void {
    this.callMethod(LoggerLevelsEnum.VERBOSE, method, message, meta);
  }

  public log(
    method: string,
    message: string | Record<string, any> | [],
    meta?: string | Record<string, any>
  ): void {
    this.callMethod(LoggerLevelsEnum.INFO, method, message, meta);
  }

  private callMethod(
    logLevel: string,
    method: string,
    message: string | Record<string, any> | [],
    meta?: string | Record<string, any> | unknown
  ): void {
    const fullLogMessage = LoggerService.getFullLogMessage(method, message);

    if (typeof meta === 'string') {
      this.logger[logLevel](fullLogMessage, { context: this.context, meta });
      return;
    }

    if (meta !== null && typeof meta === 'object') {
      this.logger[logLevel](fullLogMessage, {
        context: this.context,
        meta: replaceRestrictedFields(meta),
      });
      return;
    }
    this.logger[logLevel](fullLogMessage, { context: this.context });
  }
}
