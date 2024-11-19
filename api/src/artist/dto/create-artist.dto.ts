// src/user/dto/create-user.dto.ts
import { IsString } from 'class-validator';

export class CreateArtistDto {
  @IsString()
  name: string;
}
