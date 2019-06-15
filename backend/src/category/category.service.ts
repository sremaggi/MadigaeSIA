import { Injectable } from '@nestjs/common';

//DB
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

//MODELOS

import { Category } from "./interfaces/category.interface";
import { CreateCategoryDTO } from "./dto/category.dto";

@Injectable()
export class CategoryService {


    constructor(@InjectModel('Category') private readonly categoryModel: Model<Category>) {}



    // Get all Categorys
    async getCategorys(): Promise<Category[]> {
        const categorys = await this.categoryModel.find();
        return categorys;
    }   

    // Post a single product
    async createCategory(createCategoryDTO: CreateCategoryDTO): Promise<Category> {
        const newProduct = new this.categoryModel(createCategoryDTO);
        return newProduct.save();
    }



}
