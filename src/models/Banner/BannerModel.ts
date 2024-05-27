import { BaseModel } from '../BaseModel';

export interface BannerModel extends BaseModel{
    bannerId: number;
    title: string;
    slug: string;
    photo: string;
    description: string;
}