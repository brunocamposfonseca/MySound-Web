import { IsString } from 'class-validator';

export class CreateArtistSongDto {
  @IsString()
  artistId: string;

  @IsString()
  songId: string;
}
