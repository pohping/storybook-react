import { baseApi } from './base-api';
import type { Category } from '@/types/models';
import type { JsonApiParams, Response } from '@/types/jsonapi';

export const categoryApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getCategories: builder.query<Response<Category[]>, JsonApiParams>({
         query: (params) => ({ url: '/categories', params }),
         providesTags: (result) =>
            result
               ? [
                    ...result.data.map(({ id }) => ({
                       type: 'Category' as const,
                       id,
                    })),
                    { type: 'Category', id: 'LIST' },
                 ]
               : [{ type: 'Category', id: 'LIST' }],
      }),
   }),
});

export const { useGetCategoriesQuery } = categoryApi;
