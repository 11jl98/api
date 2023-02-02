import { IsString, isNotEmpty } from 'class-validator';

export class BasicCreateUserResDto {
  @IsString()
  nameuser?: string;
  @IsString()
  email?: string;
  @IsString()
  id?: string;
}
