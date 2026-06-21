import type { ComponentPropsWithoutRef } from 'react';

export type Variant = 'page' | 'inline';

export interface LoaderProps extends ComponentPropsWithoutRef<'div'> {
   /** Visual layout type of the loader */
   variant?: Variant;
   /** Control whether the loader is visible */
   active?: boolean;
   /** The minimum time (in milliseconds) the loader should remain visible */
   minDisplayMs?: number;
}
