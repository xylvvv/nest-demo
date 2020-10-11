import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import DatabaseConfig from '../config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      // isGlobal: true, // 声明为全局模块
      // envFilePath: 'apps/typeorm/.env'
      load: [DatabaseConfig]
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    CategoryModule,
    ProductModule,
    OrderModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
