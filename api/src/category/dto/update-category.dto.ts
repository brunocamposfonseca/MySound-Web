import { IsString, IsOptional, IsDateString } from 'class-validator';

export class UpdateCategoryDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  type: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  country: string;

  @IsOptional()
  @IsDateString()
  deletedAt: Date;
}
