import { IsString, IsEmail, IsOptional, IsBoolean, IsDateString } from 'class-validator';

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

  @IsOptional()
  @IsDateString()
  birthDate?: Date;

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
