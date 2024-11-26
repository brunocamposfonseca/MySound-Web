import { IsString } from 'class-validator';

export class CreatePlaylistSongDto {
  @IsString()
  playlistId: string;

  @IsString()
  songId: string;
}
