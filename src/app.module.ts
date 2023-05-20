import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_HOST_DATABASE,
      password: process.env.DB_HOST_PASSWORD,
      username: process.env.DB_HOST_USER,
      host: process.env.DB_HOST,
      port: Number(process.env.DB_HOST_PORT),
      synchronize: true,
      entities: [`${__dirname}/**/*.entity{*.ts,*.js}`],
    }),
    UsersModule,
  ],
})
export class AppModule {}
