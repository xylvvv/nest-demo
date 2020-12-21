import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as passport from 'passport';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session({
    secret: 'test',
    resave: false,
    saveUninitialized: true,
    name: 'NSESSION',
  }));
  app.use(passport.initialize());
  // If sessions are being utilized, and a login session has been established, this middleware will populate `req.user` with the current user.
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
