import { BasicCreateCompanyReqDto } from '../dtos/create-company-req.dto';
import { BasicUpdateCompanyReqDto } from '../dtos/update-company-req.dto';
import { Company } from '../models/company.model';

export interface companyServiceInterface {
  created(
    basicCreatecompanyReqDto: BasicCreateCompanyReqDto,
    id_empresa: string,
  ): Promise<Company>;
  //   update(
  //     id: string,
  //     basicUpdatecompanyReqDto: BasicUpdateCompanyReqDto,
  //   ): Promise<any>;
  //   findById(id: string): Promise<Company>;
}
