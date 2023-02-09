import { IsString } from 'class-validator';

export class BasicUpdateCompanyReqDto {
  @IsString()
  id: string;
  @IsString()
  name: string;
  @IsString()
  fantasy_name: string;
  @IsString()
  cnpj_cpf: string;
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
  @IsString()
  url_photo: string;
}
