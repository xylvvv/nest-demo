import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.entity';

@Controller('order')
export class OrderController {
  constructor(
    private orderService: OrderService,
  ) {}

  @Get()
  findAll(): Promise<Order[]> {
    return this.orderService.findAll();
  }
}
