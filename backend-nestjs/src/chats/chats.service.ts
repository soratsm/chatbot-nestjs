import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../lib/prisma.service';

@Injectable()
export class ChatsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const allChats = await this.prisma.questions.findMany({
      where: {
        deleted: false,
      },
      include: {
        answers: {
          select: {
            content: true,
            nextId: true,
          },
          orderBy: {
            order: 'asc',
          },
        },
      },
    });
    if (!allChats.length) {
      throw new HttpException('data nothing', HttpStatus.NOT_FOUND);
    } else {
      return allChats;
    }
  }
}
