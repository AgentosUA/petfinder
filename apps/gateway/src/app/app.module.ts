import { Module } from '@nestjs/common';

import { Logger } from '@petfinder-project/logger';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [Logger, SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_USER,
    database: process.env.DB_NAME,
    models: [],
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
