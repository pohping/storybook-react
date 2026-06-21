import { http, HttpResponse } from 'msw';
import results from '../data/products.json';
import result from '../data/product.json';
import product from '../data/product.json';

export const productHandlers = [
   http.get('http://localhost:8000/products', () => {
      return HttpResponse.json(results);
   }),
   http.get('http://localhost:8000/products/:slug', ({ params }) => {
      const {} = params;

      return HttpResponse.json(product);
   }),
];
