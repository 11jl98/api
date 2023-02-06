import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../utils/local-auth.guard';
import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
