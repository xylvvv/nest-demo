import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { CookieSerializer } from './cookie-serializer';

@Module({
  imports: [
    PassportModule
  ],
  providers: [LocalStrategy, CookieSerializer],
  controllers: [AuthController]
})
export class AuthModule {}
