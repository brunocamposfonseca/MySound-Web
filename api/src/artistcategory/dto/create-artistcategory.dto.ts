import { IsString } from 'class-validator';

export class CreateArtistCategoryDto {
  @IsString()
  artistId: string;

  @IsString()
  categoryId: string;
}
