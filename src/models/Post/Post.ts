import { BaseModel } from "../BaseModel";

export interface Post extends BaseModel{
    postId: number;
    title: string;
    slug: string;
    summary: string;
    description: string;
    quote: string;
    photo: string;
    tags: string;
    postCategoryId: number;
    postTagId: number;
    userId: number;
}