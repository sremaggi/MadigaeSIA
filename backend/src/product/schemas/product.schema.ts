import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    name: String,
    description: String,
    imageURL: String,
    category:String,
    subCategory:String,
    subCategory2:String,
    price: Number,
    createdAt: { type: Date, default: Date.now }
});

