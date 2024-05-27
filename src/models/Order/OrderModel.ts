import { BaseModel } from "../BaseModel";

export interface OrderModel extends BaseModel{
    orderId: number;
    orderNumber: number;
    userId: number;
    subTotal: number;
    shippingId: number;
    coupon: number;
    totalAmount: number;
    quantity: number;
    paymentMethod: string;
    paymentStatus: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    postCode: string;
    address1: string;
    address2: string;
}