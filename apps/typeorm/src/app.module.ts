import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'asd@123',
      database: 'demo',
      synchronize: false, // 是否自动创建表结构（生产环境慎用，可能会丢失数据）
      // 引入实体的四种方式：
      // entities: ['dist/**/*.entity{.ts,.js}'], // 1. 静态全局路径，但是webpack热更新不支持
      // entities: [Category, Product], // 2. 破坏了应用的域边界
      autoLoadEntities: true, // 3. 自动载入实体（4. 还可以通过ormconfig.json文件的方式）
      logging: ['query']
    }),
    CategoryModule,
    ProductModule,
    OrderModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
