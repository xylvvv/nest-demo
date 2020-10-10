import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  find(): Promise<Category[]> {
    return this.categoryService.findAll();
  }
}
