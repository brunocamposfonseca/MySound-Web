import { IsString, IsDateString, IsEnum } from 'class-validator';

export class CreateArtistAlbumDto {
  @IsString()
  artistId: string;

  @IsString()
  albumId: string;
}
