import { BaseModel } from "../BaseModel";

export interface ProductModel extends BaseModel{
    productId: number;
    title: string;
    slug: string;
    summary: string;
    description: string;
    photo: string;
    stock: number;
    size: number;
    condition: string;
    price: number;
    discount: number;
    isFeatured: boolean;
    categoryId: string;
    childCategoryId: string;
    brandId: string;
}