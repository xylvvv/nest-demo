import { AuthGuard } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

// 守卫调用Passport策略并启动验证步骤判定是否拦截请求
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
