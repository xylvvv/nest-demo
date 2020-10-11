import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';
// import { ConfigService } from '@nestjs/config';
// import DatabaseConfig from '../../config/database.config';
// import { ConfigType } from '@nestjs/config';

@Controller('category')
export class CategoryController {
  constructor(
    private categoryService: CategoryService,
    // private configService: ConfigService,
    // @Inject(DatabaseConfig.KEY)
    // private dbConfig: ConfigType<typeof DatabaseConfig>,
  ) {}

  @Get()
  find(): Promise<Category[]> {
    // console.log(this.configService.get('DATABASE_USER'))
    // console.log(process.env.NODE_ENV, this.configService.get('database'))
    // console.log(this.dbConfig)
    return this.categoryService.findAll();
  }
}
