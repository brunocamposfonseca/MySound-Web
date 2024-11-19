// src/user/dto/create-user.dto.ts
import { IsString, IsEmail, IsOptional, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  slug: string;

  @IsOptional()
  @IsString()
  cpf?: string;

  @IsString()
  genre: string;

  @IsString()
  country: string;

  @IsOptional()
  @IsBoolean()
  status?: boolean;

  @IsOptional()
  @IsString()
  phoneNumber?: string;
}
