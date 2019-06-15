import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';


import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from './schemas/category.schema';
import { MorganModule } from 'nest-morgan';


@Module({
  
  imports:[MorganModule.forRoot(),
    MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }]),],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule { }
