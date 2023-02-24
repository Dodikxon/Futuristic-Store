import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { AuthModule } from '../auth/auth.module';
import { Products } from '../products/products.model';
import { Chat } from '../chat/chat.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Products, Chat]),
    forwardRef(() => AuthModule),
  ],

  exports: [UsersService],
})
export class UsersModule {}
