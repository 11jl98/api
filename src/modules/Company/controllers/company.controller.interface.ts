import { BasicCreateCompanyReqDto } from '../dtos/create-company-req.dto';
import { Company } from '../models/company.model';

export interface CompanyControllerInterface {
  created(
    basicCreatecompanyReqDto: BasicCreateCompanyReqDto,
    req: any,
  ): Promise<Company>;
  findById(id: string, req: any): Promise<Company>;
}
