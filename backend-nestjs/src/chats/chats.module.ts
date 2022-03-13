import { Module } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { ChatsController } from './chats.controller';
import { PrismaService } from 'src/lib/prisma.service';

@Module({
  providers: [PrismaService, ChatsService],
  controllers: [ChatsController],
})
export class ChatsModule {}
