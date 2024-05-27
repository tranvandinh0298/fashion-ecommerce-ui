import { BannerModel } from '@/models/Banner/BannerModel';
import { Filter } from '@/models/Http/Filter';
import { PageResponse } from '@/models/Http/PageResponse';
import { Sort } from '@/models/Http/Sort';
import { BannerService } from '@/services/Banner/BannerService';
import { GetServerSideProps } from 'next';
import React from 'react'
import Slider from '../Slider/Slider';

type Props = {
    pageResponse: PageResponse<BannerModel>; 
};


const LargeBanner = ({ pageResponse, ...props }: Props) => {
  return (
    <Slider id="large-banner" data={pageResponse} />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const bannerService = new BannerService();
    const filters: Filter[] = [];
    const sorts: Sort[] = [{ key: 'createdAt', direction: 'desc' }];
    const page = 0;
    const size = 3;
    const apiResponse = await bannerService.getBannersWithFilters(filters, sorts, page, size);

    return {
        props: {
            apiResponse,
        },
    };
};

export default LargeBanner