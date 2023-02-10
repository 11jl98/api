import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BasicCreateEmployeeReqDto } from '../dtos/create-employee-req.dto';
import { EmployeeyServiceInterface } from './employee.service.inteface';
import { EmployeeRepository } from '../repositories/employee.reporitory';
@Injectable()
export class CompanyService implements EmployeeyServiceInterface {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async created(
    basicCreateEmployeeReqDto: BasicCreateEmployeeReqDto,
    id_empresa: string,
  ) {
    const company = await this.employeeRepository.created(
      basicCreateEmployeeReqDto,
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
    const company = await this.employeeRepository.findById(id, id_empresa);
    return company;
  }
}
