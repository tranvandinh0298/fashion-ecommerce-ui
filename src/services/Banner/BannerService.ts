import { BannerModel } from "@/models/Banner/BannerModel";
import { Filter } from "@/models/Http/Filter";
import { PageRequest } from "@/models/Http/PageRequest";
import { PageResponse } from "@/models/Http/PageResponse";
import { Sort } from "@/models/Http/Sort";
import { BannerRepository } from "@/repositories/Banner/BannerRepository";

export class BannerService {
    private bannerRepository: BannerRepository

    constructor() {
        this.bannerRepository = new BannerRepository();
    }

    async getBannersWithFilters(
        filters: Filter[] = [],
        sorts: Sort[] = [],
        page: number = 0,
        size: number = 10
    ): Promise<PageResponse<BannerModel>> {
        const requestData: PageRequest = { filters, sorts, page, size };
        return this.bannerRepository.getAllBanners(requestData);
    }
}