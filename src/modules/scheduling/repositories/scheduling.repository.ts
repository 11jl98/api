import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BasicCreateSchedulingReqDto } from '../dtos/create-scheduling-req.dto';
import { Scheduling } from '../models/scheduling.model';

@Injectable()
export class SchedulingRepository {
  constructor(
    @InjectRepository(Scheduling) private dataSource: Repository<Scheduling>,
  ) {}

  async created(
    basicCreateSchedulingReqDto: BasicCreateSchedulingReqDto,
    id_empresa: string,
  ) {
    const scheduling = await this.dataSource.save(
      this.dataSource.create({ ...basicCreateSchedulingReqDto, id_empresa }),
    );
    return scheduling;
  }

  async findById(id: string, id_empresa: string) {
    const scheduling = await this.dataSource.find({
      select: {},
      where: {
        id: id,
        id_empresa: id_empresa,
      },
    });

    return scheduling[0];
  }
}
