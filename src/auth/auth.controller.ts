import { Body, Controller, Post, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PostLoginRequest } from './dto/post-login-interface';

@Controller({
  path: 'auth',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: PostLoginRequest) {
    if (!loginDto.user_id || !loginDto.password) {
      throw new BadRequestException('Missing credentials');
    }

    const result = await this.authService.login(
      loginDto.user_id,
      loginDto.password,
    );

    return result;
  }
}
