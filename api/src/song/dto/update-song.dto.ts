import { IsString, IsOptional, IsDateString, IsNumber } from 'class-validator';

export class UpdateSongDto {
  @IsOptional()
  @IsString()
  isrc: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  composition: string;

  @IsOptional()
  @IsString()
  production?: string;

  @IsOptional()
  @IsString()
  source?: string;

  @IsOptional()
  @IsString()
  pathSong: string;

  @IsOptional()
  @IsDateString()
  releaseDate: Date;

  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsNumber()
  duration: number;

  @IsOptional()
  @IsString()
  features: string;
}
