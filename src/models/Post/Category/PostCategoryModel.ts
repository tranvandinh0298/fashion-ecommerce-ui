import { BaseModel } from "@/models/BaseModel";

export interface PostCategoryModel extends BaseModel{
    postCategoryId: number;
    title: string;
    slug: string;
}