import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category])], // 存储库设计模式。forFeature定义在当前范围内注册的存储库
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
