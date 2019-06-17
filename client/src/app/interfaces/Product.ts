export interface Product{
    _id?:string;
    name: string;
    category:string;
    subCategory:string;
    subsubCategory:string;
    
    description: string;
    imageURL: string;
    price: number;
    createdAt?: Date;
}