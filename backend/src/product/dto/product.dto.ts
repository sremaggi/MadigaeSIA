export class CreateProductDTO {
    readonly name: string;
    readonly description: string;
    readonly category:string;
    readonly subCategory:string;
    readonly subCategory2:string;
    readonly imageURL: string;
    readonly price: number;
    readonly createdAt: Date;
}