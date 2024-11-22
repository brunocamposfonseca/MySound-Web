import { IsString, IsOptional } from 'class-validator';

export class UpdateArtistCategoryDto {
  @IsOptional()
  @IsString()
  artistId: string;

  @IsOptional()
  @IsString()
  categoryId: string;
}
