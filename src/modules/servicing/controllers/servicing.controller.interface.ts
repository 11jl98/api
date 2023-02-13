import { BasicCreateServicingReqDto } from '../dtos/create-servicing-req.dto';
import { Servicing } from '../models/servicing.model';

export interface ServicingControllerInterface {
  created(
    basicCreateServicingReqDto: BasicCreateServicingReqDto,
    req: any,
  ): Promise<Servicing>;
  findById(id: string, req: any): Promise<Servicing>;
}
