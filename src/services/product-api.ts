import type { Product, ProductMeta, ProductSearchMeta } from '@/types/models';
import { createJsonApiAdapter } from '@/utils';
import type { JsonApiParams, Response } from '@/types/jsonapi';
import { baseApi } from './base-api';

const [normalize, denormalize] = createJsonApiAdapter<Product>('products', {
   attributes: [
      'slug',
      'sku',
      'stock',
      'name',
      'price',
      'description',
      'information',
   ],
   relationships: {
      category: 'categories',
      thumbnail: 'images',
      optionVariants: 'optionVariants',
      galleries: 'images',
   },
});

export const productApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getProduct: builder.query<
         Response<Product>,
         { slug?: string; params?: JsonApiParams }
      >({
         query: ({ slug, params }) => ({
            url: `/products/${slug}`,
            params,
         }),
         transformResponse: denormalize,
      }),
      getProducts: builder.query<
         Response<Product[], ProductMeta>,
         JsonApiParams
      >({
         query: (params) => ({ url: '/products', params }),
         transformResponse: denormalize,
         providesTags: (result) =>
            result
               ? [
                    ...result.data.map(({ id }) => ({
                       type: 'Product' as const,
                       id,
                    })),
                    { type: 'Product', id: 'LIST' },
                 ]
               : [{ type: 'Product', id: 'LIST' }],
      }),
      getProductSearch: builder.query<
         Response<Product[], ProductSearchMeta>,
         JsonApiParams
      >({
         query: (params) => ({ url: '/product-search', params }),
         transformResponse: denormalize,
         providesTags: (result) =>
            result
               ? [
                    ...result.data.map(({ id }) => ({
                       type: 'Product' as const,
                       id,
                    })),
                    { type: 'Product', id: 'LIST' },
                 ]
               : [{ type: 'Product', id: 'LIST' }],
      }),
      addProduct: builder.mutation<Response<Product>, Partial<Product>>({
         query: (data) => ({
            url: 'products',
            body: normalize(data),
            method: 'POST',
         }),
         invalidatesTags: (results, error) =>
            error
               ? []
               : [
                    { type: 'Product', id: 'LIST' },
                    { type: 'Product', id: results?.data?.id },
                 ],
      }),
   }),
});

export const {
   useGetProductsQuery,
   useGetProductQuery,
   useGetProductSearchQuery,
   useAddProductMutation,
} = productApi;
