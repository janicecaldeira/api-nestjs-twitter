import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateLikeDto {
  @IsString()
  @IsOptional()
  Tweet: string[];

  @IsNumber()
  @IsOptional()
  tweetId: number;

  @IsString()
  @IsOptional()
  User: string[];

  @IsNumber()
  @IsOptional()
  userId: number;
}
