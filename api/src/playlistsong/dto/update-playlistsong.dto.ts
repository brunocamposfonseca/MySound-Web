import { IsString, IsOptional, IsDateString } from 'class-validator';

export class UpdatePlaylistSongDto {
  @IsOptional()
  @IsString()
  playlistId: string;

  @IsOptional()
  @IsString()
  songId: string;
}
