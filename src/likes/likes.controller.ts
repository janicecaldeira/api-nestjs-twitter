import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateLikeDto } from './likes.dto';
import { LikesService } from './likes.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('likes')
export class LikesController {
  constructor(private service: LikesService) {}

  @Post('/')
  create(@Body() addLike: CreateLikeDto) {
    return this.service.create(addLike);
  }

  @Delete('/dislike/:id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
