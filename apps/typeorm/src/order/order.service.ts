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

    // return this.connection.getRepository(Order)
    //   .createQueryBuilder('order')
    //   .leftJoinAndSelect('order.products', 'product')
    //   .leftJoinAndSelect('product.category', 'category')
    //   // 搭配Product实体中number字段的装饰器@Column({ select: false })，为product实体填充order_item表中对应number的值
    //   .addSelect('order_product.number', 'product_number')
    //   .getMany();

    // 子连接关系可通过.的方式
    return this.orderRepository.find({
      // relations: ['orderItems', 'orderItems.product', 'orderItems.product.category']
      join: { // join：relations的延伸版本
        alias: 'order',
        leftJoinAndSelect: {
          orderItems: 'order.orderItems',
          product: 'orderItems.product',
          category: 'product.category'
        }
      }
    });
  }

  create(order: Order): Promise<Order> {
    return this.orderRepository.save<Order>(order);
  }

  async remove(order: Order): Promise<Order> {
    // return this.orderRepository.remove(order);

    // 事务的创建方式一：
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    let result;

    try {
      result = await queryRunner.manager.remove(order);

      await queryRunner.commitTransaction();
    } catch (e) {
      // 如果遇到错误，可以回滚事务
      await queryRunner.rollbackTransaction();
    } finally {
      // 需要手动实例化并部署一个queryRunner
      await queryRunner.release();
    }
    return result

    // // 事务的创建方式二：
    // await this.connection.transaction(async manager => {
    //   await manager.remove(order);
    // });
  }

  update(order: Order): Promise<Order> {
    return this.orderRepository.save(order);
  }

  find(id: number): Promise<Order> {
    return this.orderRepository.findOne(id, { relations: ['orderItems'] });
  }
}
