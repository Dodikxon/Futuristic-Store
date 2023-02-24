import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/users.model';
import { AuthModule } from '../auth/auth.module';
import { Chat } from './chat.model';

@Module({
  providers: [ChatService],
  controllers: [ChatController],
  imports: [SequelizeModule.forFeature([User, Chat]), AuthModule],
  exports: [ChatService],
})
export class ChatModule {}
