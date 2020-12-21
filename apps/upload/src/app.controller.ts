import { Controller, Get, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Observable } from 'rxjs';
// import { timeout } from 'rxjs/operators';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { getType } from 'mime';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile() file,
    // @Res() res: Response
  ) {
    // return new Observable((observe) => {
    //   setTimeout(() => {
    //     observe.next('上传成功');
    //     observe.complete();
    //   }, 1000);
    // });
    // const filePath = '/Users/lvxuyang/Downloads/test.xlsx';
    // const mimeType = getType(filePath);
    // res.set({
    //   'Content-Type': mimeType,
    //   "Content-Disposition": "attachment; filename=1.xlsx"
    // })
    // const reader = createReadStream(filePath);
    // // return reader;
    // reader.pipe(res);
    return {
      name: 123
    }
  }
}
