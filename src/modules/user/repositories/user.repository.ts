import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BasicCreateUserReqDto } from '../dtos/create-user-req.dto';
import { BasicUpdateUserReqDto } from '../dtos/update-user-req.dto';
import { User } from '../models/user.model';
@Injectable()
export class UserRepository {
  constructor(@InjectRepository(User) private dataSource: Repository<User>) {}

  async created(basicCreateUserReqDto: BasicCreateUserReqDto) {
    const user = await this.dataSource.save(
      this.dataSource.create(basicCreateUserReqDto),
    );
    delete user.password;
    return user;
  }

  async update(basicUpdateUserReqDto: BasicUpdateUserReqDto, id: string) {
    const user = await this.findById(id);

    const newUser = await this.dataSource.merge(user, basicUpdateUserReqDto);
    await this.dataSource.save(newUser);
  }

  async findById(id: string) {
    const user = await this.dataSource.find({
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
  async findByAuth(nameuser: string) {
    const user = await this.dataSource.find({
      select: {
        email: true,
        password: true,
        id: true,
      },
      where: {
        nameuser: nameuser,
      },
    });

    return user[0];
  }
}
