import { IsString, IsDate, IsNumber, IsOptional } from 'class-validator';

export class CreateTweetDto {
  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsNumber()
  tweets: number[];

  @IsNumber()
  User: number[];

  @IsNumber()
  @IsOptional()
  userId: number;

  @IsNumber()
  likes: number[];

  @IsString()
  text: string;
}
