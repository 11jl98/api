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
import { BasicCreateServicingReqDto } from '../dtos/create-servicing-req.dto';
import { ServicingService } from '../services/servincing.service';
import { ServicingControllerInterface } from './servicing.controller.interface';

@Controller('company')
export class CompanyController implements ServicingControllerInterface {
  constructor(private readonly servicingService: ServicingService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async created(
    @Body(ValidationPipe)
    basicCreateServicingReqDto: BasicCreateServicingReqDto,
    @Request() req,
  ) {
    try {
      const { id } = req.user;
      const user = await this.servicingService.created(
        basicCreateServicingReqDto,
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
    const company = await this.servicingService.findById(id_company, id);
    return company;
  }
}
