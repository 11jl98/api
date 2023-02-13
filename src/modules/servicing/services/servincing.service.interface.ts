import { BasicCreateServicingReqDto } from '../dtos/create-servicing-req.dto';
import { Servicing } from '../models/servicing.model';

export interface ServicingServiceInterface {
  created(
    basicCreateEmployeeReqDto: BasicCreateServicingReqDto,
    id_empresa: string,
  ): Promise<Servicing>;

  findById(id: string, id_empresa: string): Promise<Servicing>;
}
