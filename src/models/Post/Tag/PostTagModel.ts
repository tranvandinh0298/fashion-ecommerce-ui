import { BaseModel } from "@/models/BaseModel";

export interface PostTagModel extends BaseModel{
    postTagId: number;
    title: string;
    slug: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}