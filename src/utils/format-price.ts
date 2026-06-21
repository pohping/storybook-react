export const formatPrice = (price: unknown, currency = 'MYR'): string => {
   if (typeof price !== 'number' || !isFinite(price)) return '--';

   return new Intl.NumberFormat('en-MY', {
      style: 'currency',
      currency,
   }).format(price);
};
