import { BasicCreateUserReqDto } from '../dtos/create-user-req.dto';
import { BasicCreateUserResDto } from '../dtos/create-user-res.dto';
import { BasicUpdateUserReqDto } from '../dtos/update-user-req.dto';
import { User } from '../models/user.model';

export interface UserServiceInterface {
  created(
    basicCreateUserReqDto: BasicCreateUserReqDto,
  ): Promise<BasicCreateUserResDto>;
  update(
    id: string,
    basicUpdateUserReqDto: BasicUpdateUserReqDto,
  ): Promise<void>;
  findById(id: string): Promise<User>;
}
