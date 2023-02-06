import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/user/services/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findByAuth(username);

    if (!user)
      throw new HttpException('Não exite esse usuario', HttpStatus.FORBIDDEN);

    const isValidPassword = await bcrypt.compareSync(pass, user.password);

    if (!isValidPassword)
      throw new HttpException('Senha incorreta', HttpStatus.NOT_FOUND);

    delete user.password;
    return user;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
