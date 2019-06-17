import { Schema } from "mongoose";

export const CategorySchema = new Schema({
   
    category_name:String,
    subCategory:String,
    subsubCategory:String,

});