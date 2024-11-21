import { IsString, IsOptional, IsBoolean, IsUUID, IsNotEmpty } from 'class-validator';

export class UpdatePlaylistDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsBoolean()
  @IsOptional()
  isPublic?: boolean = true;
}
