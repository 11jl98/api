import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { BasicCreateUserReqDto } from '../dtos/create-user-req.dto';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
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
