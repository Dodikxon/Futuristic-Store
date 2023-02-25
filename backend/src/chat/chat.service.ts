import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Chat } from './chat.model';
import { CreateChatDto } from './dto/create-chat.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Chat) private chatRepository: typeof Chat,
    private userService: UsersService,
  ) {}
  async createChat(dto: CreateChatDto) {
    const chat = await this.chatRepository.create({ ...dto });
    return chat;
  }

  async findById(id: number) {
    const chat = await this.chatRepository.findOne({
      where: { id },
      include: { all: true },
    });
    return chat;
  }

  async findAll(FirtsUserId: number) {
    const chat = await this.chatRepository.findAll({
      where: { FirtsUserId },
      include: { all: true },
    });
    return chat;
  }
}
