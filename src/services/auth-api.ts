import type { Response } from '@/types/jsonapi';
import { baseApi } from './base-api';
import type { LoginCredentials, User } from '@/types/models';

export const authApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      login: builder.mutation<Response<User>, LoginCredentials>({
         query: ({ reCaptchaToken, ...credential }) => ({
            url: `/login`,
            method: 'POST',
            body: credential,
            headers: { recaptcha: reCaptchaToken },
         }),
      }),
      googleAuth: builder.mutation<
         Response<User>,
         { clientId: string; accessToken: string }
      >({
         query: (data) => ({
            url: '/security/google-oauth',
            method: 'POST',
            body: JSON.stringify(data),
         }),
      }),
   }),
});

export const { useLoginMutation, useGoogleAuthMutation } = authApi;
