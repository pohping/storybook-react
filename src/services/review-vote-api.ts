import type { ReviewVote } from '@/types/models';
import { createJsonApiAdapter } from '@/utils';
import { baseApi } from './base-api';
import type { Response } from '@/types/jsonapi';

const [normalize] = createJsonApiAdapter<ReviewVote>('review-vote', {
   attributes: ['value'],
});

export const reviewVoteApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      addVote: builder.mutation<Response<ReviewVote>, Partial<ReviewVote>>({
         query: (data) => ({ url: 'review-votes', body: normalize(data) }),
      }),
   }),
});

export const { useAddVoteMutation } = reviewVoteApi;
