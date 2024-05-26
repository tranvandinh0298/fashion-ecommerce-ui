import { BaseModel } from "../BaseModel";

export interface Coupon extends BaseModel{
    couponId: number;
    code: string;
    type: string;
    value: string;
}