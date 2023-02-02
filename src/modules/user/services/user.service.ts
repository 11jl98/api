import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BasicCreateUserReqDto } from '../dtos/create-user-req.dto';
import { BasicCreateUserResDto } from '../dtos/create-user-res.dto';
import { User } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
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

  async findById(id: string) {
    const user = await this.userRepository.findById(id);
    if (!user)
      throw new HttpException('Não exite esse usuario', HttpStatus.NOT_FOUND);
    return user;
  }
}
