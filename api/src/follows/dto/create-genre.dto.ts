import { IsString } from 'class-validator';

export class CreateFollowsDto {
  @IsString()
  @IsNotEmpty()
  userId: string;
}
