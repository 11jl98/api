import { BasicCreateCompanyReqDto } from '../dtos/create-company-req.dto';
import { BasicUpdateCompanyReqDto } from '../dtos/update-company-req.dto';
import { Company } from '../models/company.model';

export interface CompanyServiceInterface {
  created(
    basicCreatecompanyReqDto: BasicCreateCompanyReqDto,
    id_empresa: string,
  ): Promise<Company>;

  findById(id: string, id_empresa: string): Promise<Company>;
}
