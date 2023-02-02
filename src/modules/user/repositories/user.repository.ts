import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BasicCreateUserReqDto } from '../dtos/create-user-req.dto';
import { User } from '../models/user.model';
@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async created(basicCreateUserReqDto: BasicCreateUserReqDto) {
    const user = await this.userRepository.save(
      this.userRepository.create(basicCreateUserReqDto),
    );
    delete user.password;
    return user;
  }

  async findById(id: string) {
    const user = await this.userRepository.find({
      select: {
        email: true,
        password: true,
        id: true,
      },
      where: {
        id: id,
      },
    });

    return user[0];
  }
}
