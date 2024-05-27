import { BaseModel } from "../BaseModel";

export interface ReviewModel extends BaseModel{
    reviewId: number;
    userId: number;
    productId: number;
    rate: number;
    review: string;
}