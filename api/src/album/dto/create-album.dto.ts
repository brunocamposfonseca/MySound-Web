import { IsString, IsDateString, IsEnum } from 'class-validator';
import { TypeAlbum } from './Enum';

export class CreateAlbumDto {
  @IsString()
  name: string;

  @IsString()
  pathCover: string;


  @IsDateString()
  releaseDate: Date;

  @IsString()
  country: string;

  @IsEnum(TypeAlbum, {message: 'Type album must be one of: album, single or eps'})
  type: TypeAlbum;
}
