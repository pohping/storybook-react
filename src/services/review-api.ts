import type { JsonApiParams, Response } from '@/types/jsonapi';
import { baseApi } from './base-api';
import type { Review, ReviewMeta } from '@/types/models';

export const reviewApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getCurrentUserReviews: builder.query<Response<Review[]>, JsonApiParams>({
         query: (params) => ({
            url: `me/reviews`,
            params,
         }),
      }),
      getReviewsByProductId: builder.query<
         Response<Review[], ReviewMeta>,
         { params?: JsonApiParams; productId: string }
      >({
         query: ({ params, productId }) => ({
            url: `products/${productId}/reviews`,
            params,
         }),
         providesTags: (result) =>
            result
               ? [
                    ...result.data.map(({ id }) => ({
                       type: 'Review' as const,
                       id,
                    })),
                    { type: 'Review', id: 'LIST' },
                 ]
               : [{ type: 'Review' }],
      }),
   }),
});

export const { useGetCurrentUserReviewsQuery, useGetReviewsByProductIdQuery } =
   reviewApi;
