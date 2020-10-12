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

  // 如果关联对象没有一起保存，检查实体类关联属性是否设置cascade的值
  @Get('create')
  async create(): Promise<Order> {
    const order = new Order();
    const products = await this.productService.findAll();
    const orderItems = [];
    products.slice(0, 2).forEach((p, index) => {
      const orderItem = new OrderItem();
      orderItem.product = p;
      orderItem.number = (index + 1) * 88;
      orderItems.push(orderItem);
    });
    order.orderItems = orderItems;
    order.code = 'code00C';
    return this.orderService.create(order);
  }

  @Get('delete')
  remove(): Promise<Order> {
    const order = new Order();
    order.id = 5;
    return this.orderService.remove(order);
  }

  @Get('update')
  async update(): Promise<Order> {
    const order = await this.orderService.find(5);
    order.code = 'code007';
    order.orderItems.forEach(item => {
      item.number = 99;
    });
    return this.orderService.update(order);
  }
}
