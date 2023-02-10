import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BasicCreateCompanyReqDto } from '../dtos/create-company-req.dto';
import { CompanyServiceInterface } from './company.service.interface';
import { CompanyRepository } from '../repositories/company.repository';
@Injectable()
export class CompanyService implements CompanyServiceInterface {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async created(
    basicCreateCompanyReqDto: BasicCreateCompanyReqDto,
    id_empresa: string,
  ) {
    const company = await this.companyRepository.created(
      basicCreateCompanyReqDto,
      id_empresa,
    );
    if (!company)
      throw new HttpException(
        'Não foi possível salvar',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    delete company.id_empresa;
    return company;
  }

  async findById(id: string, id_empresa: string) {
    const company = await this.companyRepository.findById(id, id_empresa);
    return company;
  }
}
