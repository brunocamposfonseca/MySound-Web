import { IsString, IsOptional, IsDateString } from 'class-validator';

export class UpdateSongGenreDto {
  @IsOptional()
  @IsString()
  songId: string;

  @IsOptional()
  @IsString()
  genreId: string;
}
