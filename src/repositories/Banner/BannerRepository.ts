import { BannerModel } from "@/models/Banner/BannerModel";
import { PageRequest } from "@/models/Http/PageRequest";
import { PageResponse } from "@/models/Http/PageResponse";

export class BannerRepository {
    private endPoint = "http://localhost:8080/v1/api/banners";
    async getAllBanners(requestData: PageRequest): Promise<PageResponse<BannerModel>> {
        const response = await fetch(this.endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }

        return response.json();
    }
}