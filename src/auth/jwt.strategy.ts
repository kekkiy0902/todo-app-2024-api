import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// リクエストからJWTトークンを抽出し、そのトークンが有効であるかを確認する
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET, // 環境変数から秘密鍵を読み込む
    });
  }

  async validate(payload: any) {
    // JWT のペイロードからユーザー情報を取得し、リクエストオブジェクトに追加
    return {
      user_id: payload.user_id,
      user_name: payload.user_name,
    };
  }
}
