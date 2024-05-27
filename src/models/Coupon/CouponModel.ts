import { BaseModel } from "../BaseModel";

export interface CouponModel extends BaseModel{
    couponId: number;
    code: string;
    type: string;
    value: string;
}