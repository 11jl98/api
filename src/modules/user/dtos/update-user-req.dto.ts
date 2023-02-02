import { IsString } from 'class-validator';

export class BasicUpdateUserReqDto {
  @IsString()
  nameuser?: string;
  @IsString()
  email?: string;
  @IsString()
  password?: string;
  @IsString()
  id?: string;
}
