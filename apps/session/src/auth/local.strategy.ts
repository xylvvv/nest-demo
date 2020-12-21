import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';

// Passport使用LocalStrategy策略校验请求参数，并为请求对象添加用户对象（validate方法返回）
// 只有请求中含有username和password参数（body或params），才调用validate方法验证
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = { username, password };
    console.log('user', user);
    return user;
  }
}
