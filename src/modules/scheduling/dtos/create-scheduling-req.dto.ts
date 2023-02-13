import { IsString, IsNumber } from 'class-validator';

export class BasicCreateSchedulingReqDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  price: number;
}
