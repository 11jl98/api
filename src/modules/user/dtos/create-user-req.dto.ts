import { IsString, isNotEmpty } from 'class-validator';

export class BasicCreateUserReqDto {
  @IsString()
  nameuser: string;
  @IsString()
  email: string;
  @IsString()
  password: string;
}
