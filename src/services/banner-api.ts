import type { Banner } from '@/types/models';
import { baseApi } from './base-api';
import type { JsonApiParams, Response } from '@/types/jsonapi';

export const bannerApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getBanners: builder.query<Response<Banner[]>, JsonApiParams | void>({
         query: () => ({ url: '/banners' }),
         providesTags: (result) =>
            result?.data
               ? [
                    ...result.data.map(({ id }) => ({
                       type: 'Banner' as const,
                       id,
                    })),
                    { type: 'Banner', id: 'LIST' },
                 ]
               : [{ type: 'Banner', id: 'LIST' }],
         keepUnusedDataFor: 300,
      }),
   }),
});

export const { useGetBannersQuery } = bannerApi;
