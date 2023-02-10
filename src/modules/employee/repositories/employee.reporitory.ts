import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BasicCreateEmployeeReqDto } from '../dtos/create-employee-req.dto';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeRepository {
  constructor(
    @InjectRepository(Employee) private dataSource: Repository<Employee>,
  ) {}

  async created(
    basicCreateEmployeeReqDto: BasicCreateEmployeeReqDto,
    id_empresa: string,
  ) {
    const employee = await this.dataSource.save(
      this.dataSource.create({ ...basicCreateEmployeeReqDto, id_empresa }),
    );
    return employee;
  }

  async findById(id: string, id_empresa: string) {
    const employee = await this.dataSource.find({
      select: {},
      where: {
        id: id,
        id_empresa: id_empresa,
      },
    });

    return employee[0];
  }
}
