import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from '@/users/user.entity';

// リクエストからJWTトークンを抽出し、そのトークンが有効であるかを確認する
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET'),
    });
  }

  async validate(payload: User) {
    // JWT のペイロードからユーザー情報を取得し、リクエストオブジェクトに追加
    return {
      user_id: payload.user_id,
      role_id: payload.role_id,
      company_id: payload.company_id,
      name: payload.name,
    };
  }
}
