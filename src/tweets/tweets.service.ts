import { Injectable } from '@nestjs/common';
import { Prisma, Tweet } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateTweetDto } from './tweets.dto';

@Injectable()
export class TweetsService {
  constructor(private db: PrismaService) {}

  async create(data: CreateTweetDto): Promise<Tweet> {
    return this.db.tweet.create({
      data,
    });
  }

  async findAll(): Promise<Tweet[]> {
    return this.db.tweet.findMany();
  }

  async findOne(id: number): Promise<Tweet> {
    const tweet = await this.db.tweet.findUnique({
      where: { id },
    });
    return tweet;
  }

  async update(id: number, data: Prisma.TweetCreateInput): Promise<Tweet> {
    return this.db.tweet.update({
      data,
      where: {
        id: id,
      },
    });
  }

  async deleteOne(id: number): Promise<Tweet> {
    return this.db.tweet.delete({
      where: { id },
    });
  }
}
