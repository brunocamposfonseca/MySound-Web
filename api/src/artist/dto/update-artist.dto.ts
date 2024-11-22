import { IsString, IsOptional } from 'class-validator';

export class UpdateArtistDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  slug: string;
}
