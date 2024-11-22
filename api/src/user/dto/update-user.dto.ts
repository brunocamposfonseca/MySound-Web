import { IsString, IsEmail, IsOptional, IsBoolean, IsDateString, IsNumber, IsEnum } from 'class-validator';
import { Gender } from './Enum';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  slug?: string;

  @IsOptional()
  @IsString()
  cpf?: string;

  @IsOptional()
  @IsDateString()
  birthDate: Date;

  @IsOptional()
  @IsEnum(Gender, {message: 'Gender must be one of: male, female, other, prefer_not_to_say'})
  gender: Gender;

  @IsOptional()
  @IsString()
  country?: string;

  @IsOptional()
  @IsBoolean()
  status?: boolean;

  @IsOptional()
  @IsString()
  phoneNumber?: string;
}
