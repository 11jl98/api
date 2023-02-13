import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BasicCreateServicingReqDto } from '../dtos/create-servicing-req.dto';
import { ServicingServiceInterface } from './servincing.service.interface';
import { ServicingRepository } from '../repositories/servicing.repository';

@Injectable()
export class ServicingService implements ServicingServiceInterface {
  constructor(private readonly servicingRepository: ServicingRepository) {}

  async created(
    basicCreateServicingReqDto: BasicCreateServicingReqDto,
    id_empresa: string,
  ) {
    const employee = await this.servicingRepository.created(
      basicCreateServicingReqDto,
      id_empresa,
    );
    if (!employee)
      throw new HttpException(
        'Não foi possível salvar',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    delete employee.id_empresa;
    return employee;
  }

  async findById(id: string, id_empresa: string) {
    const employee = await this.servicingRepository.findById(id, id_empresa);
    return employee;
  }
}
