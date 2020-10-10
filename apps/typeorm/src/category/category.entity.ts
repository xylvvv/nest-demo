import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Product } from '../product/product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30, default: '', nullable: false })
  name: string;

  // 一对多关系：一个分类可以包含多个商品，一个商品只在一个类别中
  // 一对多、多对一成对出现，还要在另一侧的实体类中定义多对一关系
  @OneToMany(() => Product, product => product.category)
  products: Product[];
}
