import { BasicCreateUserReqDto } from '../dtos/create-user-req.dto';
import { BasicUpdateUserReqDto } from '../dtos/update-user-req.dto';
import { User } from '../models/user.model';

export interface UserControllerInterface {
  created(basicCreateUserReqDto: BasicCreateUserReqDto): Promise<User>;
  update(
    id: string,
    basicUpdateUserReqDto: BasicUpdateUserReqDto,
  ): Promise<any>;
  findById(id: string): Promise<User>;
}
