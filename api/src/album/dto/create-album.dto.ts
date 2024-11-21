import { IsString, IsDateString } from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  name: string;

  @IsString()
  pathCover: string;


  @IsDateString()
  releaseDate: Date;

  @IsString()
  country: string;
}
