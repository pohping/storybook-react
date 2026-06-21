import { useCallback, useEffect, useRef } from 'react';

export function useDebounceCallback<
   T extends (...args: any[]) => ReturnType<T>,
>(func: T, delay = 500) {
   const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

   const debouncedFn = useCallback(
      (...args: Parameters<T>) => {
         if (timer.current) clearTimeout(timer.current);

         timer.current = setTimeout(() => {
            func(...args);
         }, delay);
      },
      [func, delay],
   );

   // Auto-cleanup on unmount
   useEffect(
      () => () => {
         if (timer.current) clearTimeout(timer.current);
      },
      [],
   );

   return debouncedFn;
}
