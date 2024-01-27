import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { Logger } from '@petfinder-project/logger';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './modules/users/user.model';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [Logger, ConfigModule.forRoot(), SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.DB_NAME,
    models: [User],
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
