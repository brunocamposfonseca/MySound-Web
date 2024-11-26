import { IsString, IsOptional, IsDateString } from 'class-validator';

export class UpdateSongCategoryDto {
  @IsOptional()
  @IsString()
  songId: string;

  @IsOptional()
  @IsString()
  categoryId: string;
}
