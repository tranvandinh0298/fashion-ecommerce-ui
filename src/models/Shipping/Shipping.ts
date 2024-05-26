import { BaseModel } from "../BaseModel";

export interface Shipping extends BaseModel{
    shippingId: number;
    type: string;
    price: number;
}