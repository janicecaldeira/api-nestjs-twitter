import { Injectable, ConflictException } from '@nestjs/common';
import { Like } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateLikeDto } from './likes.dto';

@Injectable()
export class LikesService {
  constructor(private db: PrismaService) {}

  async create(data: CreateLikeDto): Promise<Like> {
    return this.db.like.create({
      data,
      include: {
        Tweet: true,
      },
    });
  }
}
