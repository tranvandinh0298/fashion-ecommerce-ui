import { BaseModel } from "@/models/BaseModel";

export interface PostTag extends BaseModel{
    postTagId: number;
    title: string;
    slug: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}