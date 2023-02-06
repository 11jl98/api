import { IsString } from 'class-validator';

export class BasicAuthReqDto {
  @IsString()
  email: string;
  @IsString()
  password: string;
}
