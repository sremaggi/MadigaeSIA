export interface Product{
    _id?:string;
    name: string;
    category:string;
    subCategory:string;
    
    description: string;
    imageURL: string;
    price: number;
    createdAt?: Date;
}