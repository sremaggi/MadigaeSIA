import { Schema } from "mongoose";

export const CategorySchema = new Schema({
   
    category:String,
    subCategory:String,
    subsubCategory:String,

});