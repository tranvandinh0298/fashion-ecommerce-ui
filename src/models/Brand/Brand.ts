import { BaseModel } from "../BaseModel";

export interface Brand extends BaseModel{
    brandId: number;
    title: string;
    slug: string;
}