import { Controller, Get, Param } from '@nestjs/common';
import { Product } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(
    private productService: ProductService,
  ) {}

  @Get()
  find(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Product> {
    return this.productService.findOne(id);
  }
}
