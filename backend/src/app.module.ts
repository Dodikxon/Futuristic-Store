import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.model';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ProductsController } from './products/products.controller';
import { ProductsModule } from './products/products.module';
import { Products } from './products/products.model';
import { MulterModule } from '@nestjs/platform-express';
import { Chat } from './chat/chat.model';
import { ChatController } from './chat/chat.controller';
import { ChatModule } from './chat/chat.module';
import { AppGateway } from './app/app.gateway';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST || '127.0.0.1',
      port: Number(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USERNAME || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'Postgres',
      database: process.env.POSTGRES_DATABASE || 'futuristic-store',
      models: [User, Products, Chat],
      autoLoadModels: true,
    }),
    UsersModule,
    AuthModule,
    ProductsModule,
    ChatModule,
  ],
  controllers: [AuthController, ProductsController, ChatController],
  providers: [AuthService, AppGateway],
})
export class AppModule {}
