import {
  IsString,
  Length,
  IsDate,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsString()
  @Length(3, 280)
  tweets: string[];

  @IsString()
  @IsOptional()
  User: string[];

  @IsNumber()
  @IsOptional()
  userId: number;

  @IsString()
  likes: string[];

  @IsString()
  text: string;
}
