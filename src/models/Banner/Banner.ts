import { BaseModel } from '../BaseModel';

export interface Banner extends BaseModel{
    bannerId: number;
    title: string;
    slug: string;
    photo: string;
    description: string;
}