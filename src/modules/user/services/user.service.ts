import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { BasicCreateUserReqDto } from '../dtos/create-user-req.dto';
import { BasicUpdateUserReqDto } from '../dtos/update-user-req.dto';
import { UserRepository } from '../repositories/user.repository';
import { UserServiceInterface } from './user.service.interface';

@Injectable()
export class UserService implements UserServiceInterface {
  constructor(private readonly userRepository: UserRepository) {}

  async created(basicCreateUserReqDto: BasicCreateUserReqDto) {
    const user = await this.userRepository.created(basicCreateUserReqDto);
    if (!user)
      throw new HttpException(
        'Não foi possível salvar',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    return user;
  }

  async update(id: string, basicUpdateUserReqDto: BasicUpdateUserReqDto) {
    await this.userRepository.update(basicUpdateUserReqDto, id);
  }

  async findById(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user)
      throw new HttpException('Não exite esse usuario', HttpStatus.NOT_FOUND);
    return user;
  }

  async findByAuth(nameuser: string) {
    const user = await this.userRepository.findByAuth(nameuser);
    if (!user)
      throw new HttpException('Não exite esse usuario', HttpStatus.NOT_FOUND);
    return user;
  }
}
