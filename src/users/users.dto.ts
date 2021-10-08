import {
  IsString,
  Length,
  IsDate,
  IsNumber,
  IsEmail,
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

  @IsNumber()
  follows: number[];

  @IsString()
  likes: string[];

  @IsString()
  @Length(3, 30)
  username: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  img: string;

  @IsString()
  @Length(8, 30)
  password: string;

  @IsString()
  @Length(2, 50)
  displayName: string;

  @IsString()
  birth: string;

  @IsString()
  bio: string;
}
