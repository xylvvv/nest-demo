import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';
import { ProductService } from '../product/product.service';
import { OrderItem } from './order-item.entity';

@Controller('order')
export class OrderController {
  constructor(
    private orderService: OrderService,
    private productService: ProductService,
  ) {}

  @Get()
  findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }

  @Get('create')
  async create(): Promise<Order> {
    const order = new Order();
    const orderItem = new OrderItem();
    const product = await this.productService.findOne(1);
    orderItem.product = product;
    orderItem.number = 66;
    order.orderItems = [orderItem, orderItem];
    order.code = 'test001';
    return this.orderService.create(order);
  }
}
