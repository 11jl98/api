import { IsString, IsNumber } from 'class-validator';

export class BasicUpdateServicingReqDto {
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
