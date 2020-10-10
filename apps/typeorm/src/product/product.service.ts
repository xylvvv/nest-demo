import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    // return this.productRepository.find();
    return this.productRepository.find({ relations: ['category'] });
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOne(id);
  }
}
