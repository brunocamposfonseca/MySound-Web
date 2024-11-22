import { IsString, IsDateString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsString()
  description: string;

  @IsString()
  country: string;

  @IsDateString()
  deletedAt: Date;
}
