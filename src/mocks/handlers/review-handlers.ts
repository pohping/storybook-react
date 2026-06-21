import { http, HttpResponse } from 'msw';
import reviews from '../data/reviews.json';

export const reviewHandlers = [
   http.get('http://localhost:8000/products/:productId/reviews', () => {
      return HttpResponse.json(reviews);
   }),
];
