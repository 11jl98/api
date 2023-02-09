import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../../../utils/local-auth.guard';
import { AuthService } from '../services/auth.service';
import { AuthControllerInterface } from './auth.controller.interface';

@Controller('auth')
export class AuthController implements AuthControllerInterface {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async Auth(@Request() req) {
    return (await this.authService.login(req.user)).access_token;
  }
}
