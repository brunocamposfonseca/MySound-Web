import { IsString } from 'class-validator';

export class CreateSongGenreDto {
  @IsString()
  songId: string;

  @IsString()
  genreId: string;
}
