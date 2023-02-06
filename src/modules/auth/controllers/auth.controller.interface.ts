import { BasicAuthReqDto } from '../dtos/auth-req.dto';

export interface AuthControllerInterface {
  Auth(basicCreateUserReqDto: BasicAuthReqDto): Promise<string>;
}
