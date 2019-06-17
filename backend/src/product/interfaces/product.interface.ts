import { Document } from "mongoose";

export interface Product extends Document {
    readonly name: string;
    readonly description: string;
    readonly category:string;
    readonly subCategory:string;
    readonly subsubCategory:string;
    readonly imageURL: string;
    readonly price: number;
    readonly createdAt: Date;
}