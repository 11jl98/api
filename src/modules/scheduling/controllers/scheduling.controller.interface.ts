import { BasicCreateSchedulingReqDto } from '../dtos/create-scheduling-req.dto';
import { Scheduling } from '../models/scheduling.model';

export interface SchedulingControllerInterface {
  created(
    basicCreateSchedulingReqDto: BasicCreateSchedulingReqDto,
    req: any,
  ): Promise<Scheduling>;
  findById(id: string, req: any): Promise<Scheduling>;
}
