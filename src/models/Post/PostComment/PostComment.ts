import { BaseModel } from "@/models/BaseModel";

export interface PostComment extends BaseModel {
    postCommentId: number;
    userId: string;
    postId: string;
    comment: string;
    repliedComment: string;
}
