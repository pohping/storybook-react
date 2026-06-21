import { http, HttpResponse } from 'msw';
import result from '../data/banners.json';

export const bannerHandlers = [
   http.get('http://localhost:8000/banners', () => {
      return HttpResponse.json(result);
   }),
];
