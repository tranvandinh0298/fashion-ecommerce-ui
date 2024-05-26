import { BaseModel } from "../BaseModel";

export interface Category extends BaseModel{
    categoryId: number;
    title: string;
    slug: string;
    summary: string;
    photo: string;
    isParent: boolean;
    parentCategoryId?: number;
}