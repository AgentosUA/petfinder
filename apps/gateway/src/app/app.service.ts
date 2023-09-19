import { Injectable } from '@nestjs/common';
import { LoggerService } from '@petfinder-project/logger';

@Injectable()
export class AppService {
  constructor(
    // private configService: ConfigService<IApplicationConfigInterface>,
    private readonly logger: LoggerService
  ) {
    logger.setContext(this.constructor.name);
  }

  public healthCheck(): string {
    // return `Date: ${new Date()} Service: ${this.configService.get(
    //   'APP_NAME'
    // )}!`;
    return `Date:  ${new Date()}`;
  }
}
