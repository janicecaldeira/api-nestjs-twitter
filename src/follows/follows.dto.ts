import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateFollowDto {
  @IsString()
  @IsOptional()
  User: string[];

  @IsNumber()
  @IsOptional()
  userId: number;

  @IsNumber()
  followedId: number;
}
