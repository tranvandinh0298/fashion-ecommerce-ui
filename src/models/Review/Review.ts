import { BaseModel } from "../BaseModel";

export interface Review extends BaseModel{
    reviewId: number;
    userId: number;
    productId: number;
    rate: number;
    review: string;
}