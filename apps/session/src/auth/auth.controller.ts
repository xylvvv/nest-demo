import { Controller, Get, Post, Request, Session, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Session() session) {
    req.login(req.user, (...args) => console.log('login callback', args));
    return 123;
  }

  @Get('profile')
  getProfile(@Request() req, @Session() session) {
    console.log('session', session);
    console.log('user', req.user)
    return session;
  }
}
