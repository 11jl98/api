import { IsString } from 'class-validator';

export class BasicCreateEmployeeReqDto {
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
