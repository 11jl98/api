import { BasicCreateEmployeeReqDto } from '../dtos/create-employee-req.dto';
import { Employee } from '../models/employee.model';

export interface EmployeeyServiceInterface {
  created(
    basicCreateEmployeeReqDto: BasicCreateEmployeeReqDto,
    id_empresa: string,
  ): Promise<Employee>;

  findById(id: string, id_empresa: string): Promise<Employee>;
}
