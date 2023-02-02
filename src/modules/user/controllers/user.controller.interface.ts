import { BasicCreateUserReqDto } from '../dtos/create-user-req.dto';
import { BasicCreateUserResDto } from '../dtos/create-user-res.dto';
import { User } from '../models/user.model';

export interface UserControllerInterface {
  created(
    basicCreateUserReqDto: BasicCreateUserReqDto,
  ): Promise<BasicCreateUserResDto>;
  findById(id: string): Promise<User>;
}
