import { BaseModel } from "@/models/BaseModel";

export interface PostCategory extends BaseModel{
    postCategoryId: number;
    title: string;
    slug: string;
}