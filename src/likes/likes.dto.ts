import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateLikeDto {
  @IsString()
  @IsOptional()
  Tweet: string[];

  @IsNumber()
  @IsOptional()
  tweetId: number;

  @IsNumber()
  User: number[];

  @IsNumber()
  @IsOptional()
  userId: number;
}
