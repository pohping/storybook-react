import { useCallback, useRef } from 'react';
import { useEventListener } from './use-event-listener';

export function useHoverOutside(
   refs: React.RefObject<HTMLElement | null>[],
   onOutside: () => void,
   delay = 150,
) {
   const timeoutRef = useRef<number | null>(null);

   const handleMove = useCallback(
      (e: Event) => {
         const target = e.target as Node;
         const isInside = refs.some((ref) => ref.current?.contains(target));

         if (isInside) {
            if (timeoutRef.current) {
               clearTimeout(timeoutRef.current);
               timeoutRef.current = null;
            }
         } else if (!timeoutRef.current) {
            timeoutRef.current = window.setTimeout(() => {
               onOutside();
               timeoutRef.current = null;
            }, delay);
         }
      },
      [refs, onOutside, delay],
   );

   useEventListener('mousemove', handleMove as any);
}
