import { IsString, IsNumber } from 'class-validator';

export class BasicCreateServicingReqDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  price: number;
}
