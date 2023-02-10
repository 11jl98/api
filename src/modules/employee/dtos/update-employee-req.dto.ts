import { IsString } from 'class-validator';

export class BasicUpdateEmployeeReqDto {
  @IsString()
  id: string;
  @IsString()
  name: string;
  @IsString()
  cpf: string;
  @IsString()
  address: string;
  @IsString()
  number: string;
  @IsString()
  cep: string;
  @IsString()
  neighborhood: string;
  @IsString()
  cellphone: string;
}
