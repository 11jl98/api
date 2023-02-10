import { BasicCreateEmployeeReqDto } from '../dtos/create-employee-req.dto';
import { Employee } from '../models/employee.model';

export interface EmployeeControllerInterface {
  created(
    basicCreateEmployeeReqDto: BasicCreateEmployeeReqDto,
    req: any,
  ): Promise<Employee>;
  findById(id: string, req: any): Promise<Employee>;
}
