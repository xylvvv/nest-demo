import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../category/category.entity';
import { Order } from '../order/order.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column关于列的设置，只在synchronize为true（即开启了orm自动创表结构）时生效
  @Column({ nullable: false, default: '', length: 30 })
  name: string;

  @Column({ type: 'float', nullable: false, default: 0 })
  price: number;

  @ManyToOne(
    () => Category,
    category => category.products,
    { onDelete: 'CASCADE', nullable: false}
  )
  // 默认会自动生成并使用categoryId作为外健，可通过该装饰器自定义
  // @JoinColumn({ name: 'cid', referencedColumnName: 'id' })
  category: Category;

  // @ManyToMany(() => Order, order => order.products)
  // orders: Order[];

  // number其实是中间表order_item中的字段，如果不设置select为false，
  // 普通的find*方法会报错（默认select的是product表的number列），
  // 搭配andSelect可以在Product实体中填充order_item表中number的值
  @Column({ select: false })
  number: number;
}
