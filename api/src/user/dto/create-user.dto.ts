import { IsString, IsEmail, IsOptional, IsBoolean, IsDateString, IsNumber, IsEnum } from 'class-validator';
import { Gender } from './Enum';

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

  @IsDateString()
  birthDate: Date;

  @IsEnum(Gender, {message: 'Gender must be one of: male, female, other, prefer_not_to_say'})
  gender: Gender;

  @IsString()
  country: string;

  @IsOptional()
  @IsBoolean()
  status?: boolean;

  @IsOptional()
  @IsString()
  phoneNumber?: string;
  
}
