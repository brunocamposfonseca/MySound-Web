import { IsString, IsOptional } from 'class-validator';

export class UpdateArtistSongDto {
  @IsOptional()
  @IsString()
  artistId: string;

  @IsOptional()
  @IsString()
  songId: string;
}
