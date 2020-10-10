import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { Connection, Repository } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    private readonly connection: Connection,
  ) {}

  findAll(): Promise<Order[]> {
    // return this.orderRepository.find();
    // return this.orderRepository.find({ relations: ['products'] });
    return this.connection.getRepository(Order)
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.products', 'product')
      .leftJoinAndSelect('product.category', 'category')
      // 搭配Product实体中number字段的装饰器@Column({ select: false })，为product实体填充order_item表中对应number的值
      .addSelect('order_product.number', 'product_number')
      .getMany();
  }
}
