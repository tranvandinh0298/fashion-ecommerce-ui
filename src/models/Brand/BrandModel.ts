import { BaseModel } from "../BaseModel";

export interface BrandModel extends BaseModel{
    brandId: number;
    title: string;
    slug: string;
}