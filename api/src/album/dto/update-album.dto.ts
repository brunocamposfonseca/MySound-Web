import { Optional } from '@nestjs/common';
import { IsString, IsOptional, IsDateString, IsEnum } from 'class-validator';
import { TypeAlbum } from './Enum';

export class UpdateAlbumDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  pathCover: string;

  @IsOptional()
  @IsDateString()
  releaseDate: Date;

  @IsOptional()
  @IsString()
  country: string;

  @Optional()
  @IsEnum(TypeAlbum, {message: 'Type album must be one of: album, single or eps'})
  type: TypeAlbum;
}
