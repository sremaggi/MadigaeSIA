import { Document } from "mongoose";

export interface Category extends Document {
    
    readonly category_name:string;
    readonly subCategory:string;
    readonly subsubCategory:string;
   
}