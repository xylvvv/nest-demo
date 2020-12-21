import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CookieSerializer extends PassportSerializer {
  deserializeUser(payload: any, done: CallableFunction): any {
    done(null, payload);
  }

  serializeUser(user: any, done: CallableFunction): any {
    done(null, user);
  }

}
