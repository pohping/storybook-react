import { useEffect } from 'react';

export function useOutsideClick(
   refs:
      | React.RefObject<HTMLElement | null>
      | React.RefObject<HTMLElement | null>[],
   handler: (event: MouseEvent | TouchEvent) => void,
) {
   useEffect(() => {
      const listener = (event: MouseEvent | TouchEvent) => {
         const target = event.target as Node;
         const refArray = Array.isArray(refs) ? refs : [refs];

         const isInside = refArray.some((ref) => ref.current?.contains(target));
         if (!isInside) handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
         document.removeEventListener('mousedown', listener);
         document.removeEventListener('touchstart', listener);
      };
   }, [refs, handler]);
}
