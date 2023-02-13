import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BasicCreateSchedulingReqDto } from '../dtos/create-scheduling-req.dto';
import { SchedulingServiceInterface } from './Scheduling.service.interface';
import { SchedulingRepository } from '../repositories/scheduling.repository';

@Injectable()
export class SchedulingService implements SchedulingServiceInterface {
  constructor(private readonly schedulingRepository: SchedulingRepository) {}

  async created(
    basicCreateServicingReqDto: BasicCreateSchedulingReqDto,
    id_empresa: string,
  ) {
    const scheduling = await this.schedulingRepository.created(
      basicCreateServicingReqDto,
      id_empresa,
    );
    if (!scheduling)
      throw new HttpException(
        'Não foi possível salvar',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    delete scheduling.id_empresa;
    return scheduling;
  }

  async findById(id: string, id_empresa: string) {
    const scheduling = await this.schedulingRepository.findById(id, id_empresa);
    return scheduling;
  }
}
