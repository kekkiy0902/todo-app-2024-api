import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserService } from '@/users/user.service';
import { PostLoginResponse } from './dto/post-login-interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(user_id: string, pass: string): Promise<PostLoginResponse> {
    // user_idを使ってユーザーを検索
    const user = await this.userService.findOne(user_id);

    if (!user) {
      throw new NotFoundException('ユーザーが存在しません。');
    }

    // パスワードが一致した場合、パスワードを除外したユーザー情報を返す
    if (await bcrypt.compare(pass, user.password)) {
      const payload = {
        user_id: user.user_id,
        role_id: user.role_id,
        company_id: user.company_id,
        user_name: user.name,
      };

      return {
        ...payload,
        access_token: this.jwtService.sign(payload),
      };
    }

    throw new UnauthorizedException('IDまたはパスワードが間違っています。');
  }
}
