import { IsString } from 'class-validator';

export class BasicAuthReqDto {
  @IsString()
  jwt: string;
}
