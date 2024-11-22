import { IsString } from 'class-validator';

export class CreateLikesDto {
  @IsString()
  userId: string;

  @IsString()
  songId: string;
}
