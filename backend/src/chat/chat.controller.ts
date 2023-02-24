import {Body, Controller, Get, Param, Post, Put, UseGuards} from '@nestjs/common';
import { ChatService } from './chat.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateChatDto } from './dto/create-chat.dto';
import { Chat } from './chat.model';

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body() chatDto: CreateChatDto): Promise<Chat> {
    return this.chatService.createChat(chatDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:FirstUserId')
  async findAll(@Param('FirstUserId') FirstUserId: number) {
    return this.chatService.findAll(FirstUserId);
  }
}
