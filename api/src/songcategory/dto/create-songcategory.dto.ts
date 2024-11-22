import { IsString } from 'class-validator';

export class CreateSongCategoryDto {
  @IsString()
  songId: string;

  @IsString()
  categoryId: string;
}
