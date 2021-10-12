import { Injectable } from '@nestjs/common';
import { Like, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LikesService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.LikeCreateInput): Promise<Like> {
    return this.db.like.create({
      data,
    });
  }
}
