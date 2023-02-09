import { Test } from '@nestjs/testing';
import { randomUUID } from 'crypto';
import { UserController } from '../../controllers/user.controller';
import { UserService } from '../../services/user.service';
import { UserRepository } from '../../repositories/user.repository';
import { User } from '../../models/user.model';
import { BasicCreateUserReqDto } from '../../dtos/create-user-req.dto';
import { BasicCreateUserResDto } from '../../dtos/create-user-res.dto';
import { TypeOrmModule } from '@nestjs/typeorm';

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([User])],
      controllers: [UserController],
      providers: [UserService, UserRepository],
      exports: [UserService],
    }).compile();

    userController = await module.get(UserController);
  });

  it('should return a single user', async () => {
    const mockReq: BasicCreateUserReqDto = {
      nameuser: 'test',
      email: 'test@gmail.com',
      password: '123456',
    };

    const mockRes: BasicCreateUserResDto = {
      nameuser: 'test',
      email: 'test@gmail.com',
      id: randomUUID(),
    };

    const data = await userController.created(mockReq);

    expect(data).toEqual(mockRes);
  });
});
