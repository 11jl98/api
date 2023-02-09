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
import { BasicCreateCompanyReqDto } from '../dtos/create-company-req.dto';
import { CompanyService } from '../services/company.service';
import { companyControllerInterface } from './company.controller.interface';

@Controller('company')
export class CompanyController implements companyControllerInterface {
  constructor(private readonly companyService: CompanyService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  async created(
    @Body(ValidationPipe) basicCreateCompanyReqDto: BasicCreateCompanyReqDto,
    @Request() req,
  ) {
    try {
      const { id } = req.user;
      const user = await this.companyService.created(
        basicCreateCompanyReqDto,
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
    const company = await this.companyService.findById(id_company, id);
    return company;
  }
}
