import { IsString, IsDateString } from 'class-validator';

export class CreateBlockedDto {
  @IsString()
  userId: string;

  @IsString()
  artistId: string;
}
