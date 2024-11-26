import { IsString } from 'class-validator';

export class CreatePlaylistLikeDto {
  @IsString()
  userId: string;

  @IsString()
  playlistId: string;
}
