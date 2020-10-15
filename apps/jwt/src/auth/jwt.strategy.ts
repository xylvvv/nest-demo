import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import jwtConstants from '../../constants/jwt.constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret, // Passport执行验证阶段使用的密钥
    });
  }

  // 接受验证并解码后的JSON（合法且未过期），返回为请求对象添加的用户对象
  async validate(payload: any) {
    console.log('jwt strategy validating...');
    console.log(payload);
    return { userId: payload.sub, username: payload.username };
  }
}
