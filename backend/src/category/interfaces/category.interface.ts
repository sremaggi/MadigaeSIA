import { Document } from "mongoose";

export interface Category extends Document {
    
    readonly category:string;
    readonly subCategory:string;
    readonly subsubCategory:string;
   
}