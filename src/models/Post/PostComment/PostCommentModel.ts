import { BaseModel } from "@/models/BaseModel";

export interface PostCommentModel extends BaseModel {
    postCommentId: number;
    userId: string;
    postId: string;
    comment: string;
    repliedComment: string;
}
