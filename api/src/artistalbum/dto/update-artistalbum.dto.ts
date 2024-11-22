import { IsString, IsOptional } from 'class-validator';

export class UpdateArtistAlbumDto {
  @IsOptional()
  @IsString()
  artistId: string;

  @IsOptional()
  @IsString()
  albumId: string;
}
