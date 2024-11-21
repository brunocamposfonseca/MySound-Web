import { IsString, IsOptional, IsDateString } from 'class-validator';

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

  @IsString()
  duration: string;

  @IsString()
  features: string;
}
