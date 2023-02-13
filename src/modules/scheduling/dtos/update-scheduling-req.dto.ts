import { IsString, IsNumber } from 'class-validator';

export class BasicUpdateSchedulingReqDto {
  @IsString()
  id: string;
  @IsString()
  id_empresa: string;
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  price: number;
}
