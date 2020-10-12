import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../product/product.entity';
import { OrderItem } from './order-item.entity';

@Entity('order_form')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  // 这里关闭了orm的自动创建表结构的功能，使用已存在的数据库，Column关闭列的配置可以不设
  @Column()
  code: string;

  // // 1. 中间表无自定义字段的处理：
  // // 多对多关系：一个订单可以包含多个商品，一个商品也可以包含于多个订单中;
  // // 如果product实体中也需要展示它所在的全部订单，可设置ManyToMany第二个参数（product => product.orders），
  // // product实体相应字段也要设置@ManyToMany装饰器;
  // // @JoinTable需要标示在多对多关系的"所有者"这一侧
  // @ManyToMany(
  //   () => Product,
  //     // product => product.orders
  // )
  // @JoinTable({
  //   name: 'order_item',
  //   joinColumn: { name: 'order_id', referencedColumnName: 'id' },
  //   inverseJoinColumn: { name: 'product_id', referencedColumnName: 'id' }
  // })
  // products: Product[];

  // 2. 中间表有自定义字段的处理：
  @OneToMany(
    () => OrderItem,
    item => item.order,
    { cascade: true }) // 允许关联对象一起插入、更新、移除等
  orderItems: OrderItem[];
}
