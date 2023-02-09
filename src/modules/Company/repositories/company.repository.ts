import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BasicCreateCompanyReqDto } from '../dtos/create-company-req.dto';
import { Company } from '../models/company.model';
@Injectable()
export class CompanyRepository {
  constructor(
    @InjectRepository(Company) private dataSource: Repository<Company>,
  ) {}

  async created(
    basicCreateCompanyReqDto: BasicCreateCompanyReqDto,
    id_empresa: string,
  ) {
    const company = await this.dataSource.save(
      this.dataSource.create({ ...basicCreateCompanyReqDto, id_empresa }),
    );
    return company;
  }

  async findById(id: string, id_empresa: string) {
    const company = await this.dataSource.find({
      select: {},
      where: {
        id: id,
        id_empresa: id_empresa,
      },
    });

    return company[0];
  }
}
