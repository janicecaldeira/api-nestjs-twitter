import { IsString, Length, IsEmail, IsOptional } from 'class-validator';

import { Prisma } from '@prisma/client';

export class CreateUserDto {
  @IsOptional()
  createdAt: Date;

  @IsOptional()
  updatedAt: Date;

  @IsOptional()
  tweets: Prisma.TweetCreateNestedManyWithoutUserInput;

  @IsOptional()
  follows: Prisma.FollowCreateNestedManyWithoutUserInput;

  @IsOptional()
  likes: Prisma.LikeCreateNestedManyWithoutUserInput;

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

export class UpdateUserDto {
  @IsOptional()
  createdAt: Date;

  @IsOptional()
  updatedAt: Date;

  @IsOptional()
  tweets: Prisma.TweetCreateNestedManyWithoutUserInput;

  @IsOptional()
  follows: Prisma.FollowCreateNestedManyWithoutUserInput;

  @IsOptional()
  likes: Prisma.LikeCreateNestedManyWithoutUserInput;

  @IsOptional()
  @IsString()
  @Length(3, 30)
  username: string;

  @IsOptional()
  @IsEmail()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  img: string;

  @IsOptional()
  @IsString()
  @Length(8, 30)
  password: string;

  @IsOptional()
  @IsString()
  @Length(2, 50)
  displayName: string;

  @IsOptional()
  @IsString()
  birth: string;

  @IsOptional()
  @IsString()
  bio: string;
}
