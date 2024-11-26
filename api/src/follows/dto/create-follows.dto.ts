import { IsNotEmpty, IsEnum, IsString } from 'class-validator';
import { FollowedType } from './follow_enum';

export class CreateFollowDto {
  @IsNotEmpty()
  @IsString()
  followerId: string;

  @IsNotEmpty()
  @IsString()
  followedId: string;

  @IsNotEmpty()
  @IsEnum(FollowedType, {
    message: 'followedType must be either "User" or "Artist"',
  })
  followedType: FollowedType;
}
