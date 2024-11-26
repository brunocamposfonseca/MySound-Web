import { IsString, IsOptional } from 'class-validator';

export class UpdatePlaylistLikeDto {
  @IsOptional()
  @IsString()
  userId: string;

  @IsOptional()
  @IsString()
  playlistId: string;
}
