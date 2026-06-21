import { http, HttpResponse } from 'msw';
import result from '../data/categories.json';

export const categoryHandlers = [
   http.get('http://localhost:8000/categories', () => {
      return HttpResponse.json(result);
   }),
];
