import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Logger } from '@petfinder-project/logger';

@Module({
  imports: [Logger],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
