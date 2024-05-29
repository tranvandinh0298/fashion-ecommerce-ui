"use client";

import { BannerModel } from '@/models/Banner/BannerModel';
import { Filter } from '@/models/Http/Filter';
import { PageResponse } from '@/models/Http/PageResponse';
import { Sort } from '@/models/Http/Sort';
import { BannerService } from '@/services/Banner/BannerService';
import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react'
import Slider from '../Slider/Slider';


const LargeBanner = () => {
    const [pageResponse, setPageResponse] = useState<PageResponse<BannerModel> | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const bannerService = new BannerService();
            const filters: Filter[] = [];
            const sorts: Sort[] = [{ key: 'createdAt', direction: 'DESC' }];
            const page = 0;
            const size = 3;

            try {
                const apiResponse = await bannerService.getBannersWithFilters(filters, sorts, page, size);
                setPageResponse(apiResponse);
            } catch (error) {
                console.error('Failed to fetch banners:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Slider id="large-banner" data={pageResponse?.data?.content} />
    )
}

export default LargeBanner