import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { User } from 'src/modules/user/models/user.model';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(nameuser: string, password: string): Promise<User> {
    const user = await this.authService.validateUser(nameuser, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
