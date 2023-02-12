import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BasicCreateServicingReqDto } from '../dtos/create-servicing-req.dto';
import { Servicing } from '../models/servicing.model';

@Injectable()
export class ServicingRepository {
  constructor(
    @InjectRepository(Servicing) private dataSource: Repository<Servicing>,
  ) {}

  async created(
    basicCreateServicingReqDto: BasicCreateServicingReqDto,
    id_empresa: string,
  ) {
    const servicing = await this.dataSource.save(
      this.dataSource.create({ ...basicCreateServicingReqDto, id_empresa }),
    );
    return servicing;
  }

  async findById(id: string, id_empresa: string) {
    const servicing = await this.dataSource.find({
      select: {},
      where: {
        id: id,
        id_empresa: id_empresa,
      },
    });

    return servicing[0];
  }
}
