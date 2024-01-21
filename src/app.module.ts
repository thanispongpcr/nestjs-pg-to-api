import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListModule } from './list/list.module';
import { List } from './list/entities/list.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      url: process.env.POSTGRES_URL,
      // type: 'postgres',
      // host: process.env.DATABASE_HOST,
      // port: parseInt(process.env.DATABASE_PORT, 10),
      // username: process.env.DATABASE_USERNAME,
      // password: process.env.DATABASE_PASSWORD,
      // database: process.env.DATABASE_NAME,
      entities: [List],
      synchronize: false,
    }),
    ListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
