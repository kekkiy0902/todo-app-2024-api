import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserService } from '@/users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(user_id: string, pass: string): Promise<any> {
    // user_idを使ってユーザーを検索
    const user = await this.userService.findOne(user_id);

    // パスワードが一致した場合、パスワードを除外したユーザー情報を返す
    if (user && (await bcrypt.compare(pass, user.password))) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _password, ...result } = user.toJSON();

      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = {
      user_id: user.user_id,
      user_name: user.name,
      company_id: user.company_id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
