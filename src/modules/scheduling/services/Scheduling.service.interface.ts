import { BasicCreateSchedulingReqDto } from '../dtos/create-scheduling-req.dto';
import { Scheduling } from '../models/scheduling.model';

export interface SchedulingServiceInterface {
  created(
    basicCreateSchedulingReqDto: BasicCreateSchedulingReqDto,
    id_empresa: string,
  ): Promise<Scheduling>;

  findById(id: string, id_empresa: string): Promise<Scheduling>;
}
