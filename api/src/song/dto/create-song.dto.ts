import { Type } from 'class-transformer';
import { IsString, IsOptional, IsDateString, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { CreateArtistDto } from 'src/artist/dto/create-artist.dto';

export class CreateSongDto {
  @IsString()
  isrc: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  composition: string;

  @IsOptional()
  @IsString()
  production?: string;

  @IsOptional()
  @IsString()
  source?: string;

  @IsString()
  pathSong: string;

  @IsDateString()
  releaseDate: Date;

  @IsString()
  country: string;

  @IsNumber()
  duration: number;

  @IsString()
  features: string;
}
