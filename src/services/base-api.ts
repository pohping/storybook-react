import {
   createApi,
   fetchBaseQuery,
   type BaseQueryFn,
   type FetchBaseQueryError,
   type FetchArgs,
   type QueryReturnValue,
   type FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';

import { denormalizeResponse } from '@/utils/json-api-adapter';

const JSONAPI = 'application/vnd.api+json';

const mutex = new Mutex();

// Throw an error if base url is not defined
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
if (!apiBaseUrl) throw new Error('VITE_API_BASE_URL is not defined');

const rawBaseQuery = fetchBaseQuery({
   baseUrl: apiBaseUrl,
   prepareHeaders: (headers) => {
      if (!headers.get('Content-Type')?.includes('multipart')) {
         headers.set('Content-Type', JSONAPI);
      }
      headers.set('Accept', JSONAPI);
      return headers;
   },
});

const withDenormalized = (
   result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>,
) => {
   if (result.data) result.data = denormalizeResponse(result.data);
   return result;
};

const baseQueryWithReauth: BaseQueryFn<
   string | FetchArgs,
   unknown,
   FetchBaseQueryError
> = async (args, api, extraOptions) => {
   await mutex.waitForUnlock();

   let result = withDenormalized(await rawBaseQuery(args, api, extraOptions));

   // Handle 401 Unauthorized + token refresh
   if (result.error?.status === 401) {
      if (!mutex.isLocked()) {
         const release = await mutex.acquire();

         try {
            const refreshResult = await rawBaseQuery(
               { url: '/refresh-token', method: 'POST' },
               api,
               extraOptions,
            );

            if (refreshResult.data) {
               // TODO: Dispatch auth success action if needed
               // api.dispatch(setCredentials(refreshResult.data));

               // Retry original request
               result = await rawBaseQuery(args, api, extraOptions);

               if (result.data) {
                  result.data = denormalizeResponse(result.data);
               }
            } else {
               // Refresh failed → logout
               // api.dispatch(logout());
            }
         } finally {
            release();
         }
      } else {
         // Another refresh is in progress → wait and retry
         await mutex.waitForUnlock();
         result = withDenormalized(await rawBaseQuery(args, api, extraOptions));
      }
   }

   return result;
};

export const baseApi = createApi({
   reducerPath: 'api',
   baseQuery: baseQueryWithReauth,
   tagTypes: [
      'Review',
      'User',
      'Me',
      'CreditCard',
      'ShoppingSession',
      'Order',
      'CartItem',
      'Product',
      'Option',
      'Image',
      'Category',
      'Address',
      'Sale',
      'Banner',
      'Payment',
   ],
   endpoints: () => ({}),
});
