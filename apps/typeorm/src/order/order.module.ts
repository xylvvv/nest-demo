import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Order } from './order.entity';
import { OrderItem } from './order-item.entity';
import { ProductModule } from '../product/product.module';
import { OrderSubscriber } from './order.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderItem]),
    ProductModule,
  ],
  providers: [OrderService, OrderSubscriber],
  controllers: [OrderController]
})
export class OrderModule {}
