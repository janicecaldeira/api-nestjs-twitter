import { Body, Controller, Post } from '@nestjs/common';
import { CreateLikeDto } from './likes.dto';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private service: LikesService) {}

  @Post('/')
  create(@Body() addLike: CreateLikeDto) {
    return this.service.create(addLike);
  }
}
