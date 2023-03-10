import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
  Request,
  Get,
  Param,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../../utils/jwt-auth.guard';
import { BasicCreateEmployeeReqDto } from '../dtos/create-employee-req.dto';
import { EmployeeService } from '../services/employee.service';
import { EmployeeControllerInterface } from './employee.controller.interface';

@Controller('emplyoee')
export class EmployeeController implements EmployeeControllerInterface {
  constructor(private readonly employeeService: EmployeeService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async created(
    @Body(ValidationPipe) basicCreateEmployeeReqDto: BasicCreateEmployeeReqDto,
    @Request() req,
  ) {
    try {
      const { id } = req.user;
      const user = await this.employeeService.created(
        basicCreateEmployeeReqDto,
        id as string,
      );
      return user;
    } catch (error) {
      return error;
    }
  }
  @Get(':id')
  async findById(@Param('id') id_company: string, @Request() req) {
    const { id } = req.user;
    const emplyoee = await this.employeeService.findById(id_company, id);
    return emplyoee;
  }
}
