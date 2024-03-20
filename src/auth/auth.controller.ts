import {
  Body,
  Controller,
  Post,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller({
  path: 'auth',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: { user_id: string; password: string }) {
    if (!loginDto.user_id || !loginDto.password) {
      throw new BadRequestException('Missing credentials');
    }

    const user = await this.authService.validateUser(
      loginDto.user_id,
      loginDto.password,
    );

    if (!user) {
      throw new UnauthorizedException('IDまたはパスワードが間違っています。');
    }

    return this.authService.login(user);
  }
}
