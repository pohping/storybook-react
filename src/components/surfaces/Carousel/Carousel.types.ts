import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface CarouselProps extends ComponentPropsWithoutRef<'div'> {
   /** The explicit visual height of the carousel viewport container */
   height?: string | number;
   /** The slide elements to cycle through */
   children?: ReactNode;
   /** The delay time in milliseconds between automatic slide transitions */
   autoPlayInterval?: number | false;
}
