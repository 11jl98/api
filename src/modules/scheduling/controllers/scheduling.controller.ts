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
import { BasicCreateSchedulingReqDto } from '../dtos/create-scheduling-req.dto';
import { SchedulingService } from '../services/Scheduling.service';
import { SchedulingControllerInterface } from './scheduling.controller.interface';

@Controller('company')
export class SchedulingController implements SchedulingControllerInterface {
  constructor(private readonly schedulingService: SchedulingService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async created(
    @Body(ValidationPipe)
    basicCreateSchedulingReqDto: BasicCreateSchedulingReqDto,
    @Request() req,
  ) {
    try {
      const { id } = req.user;
      const user = await this.schedulingService.created(
        basicCreateSchedulingReqDto,
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
    const company = await this.schedulingService.findById(id_company, id);
    return company;
  }
}
