import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/utils/jwt-auth.guard';
import { BasicCreateUserReqDto } from '../dtos/create-user-req.dto';
import { BasicUpdateUserReqDto } from '../dtos/update-user-req.dto';
import { UserService } from '../services/user.service';
import { UserControllerInterface } from './user.controller.interface';

@Controller('user')
export class UserController implements UserControllerInterface {
  constructor(private readonly userService: UserService) {}

  @Post()
  async created(
    @Body(ValidationPipe) basicCreateUserReqDto: BasicCreateUserReqDto,
  ) {
    try {
      const user = await this.userService.created(basicCreateUserReqDto);
      return user;
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(ValidationPipe) basicUpdateUserReqDto: BasicUpdateUserReqDto,
  ) {
    try {
      await this.userService.update(id, basicUpdateUserReqDto);
      return { Message: 'Usuario editado' };
    } catch (error) {
      return error;
    }
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      const user = await this.userService.findById(id);
      return user;
    } catch (error) {
      return error;
    }
  }
}
