import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put, UseInterceptors } from '@nestjs/common';
import { MorganInterceptor } from 'nest-morgan';
import { CategoryService } from "./category.service";

import { CreateCategoryDTO } from "./dto/category.dto";




@Controller('category')
export class CategoryController {


    constructor(private categoryService: CategoryService) { }

    // Add Product: /product/create
    @Post('/create')
    async createCategory(@Res() res, @Body() createCategoryDTO: CreateCategoryDTO) {
        const product = await this.categoryService.createCategory(createCategoryDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Product Successfully Created',
            product
        });
    }

    // Get Products /product
    // @Get('/list')
    @Get('/')
    async getCategory(@Res() res) {
        const products = await this.categoryService.getCategorys();
        return res.status(HttpStatus.OK).json(products);
    }
    
}
