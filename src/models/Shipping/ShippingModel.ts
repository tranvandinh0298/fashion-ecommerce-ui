import { BaseModel } from "../BaseModel";

export interface ShippingModel extends BaseModel{
    shippingId: number;
    type: string;
    price: number;
}