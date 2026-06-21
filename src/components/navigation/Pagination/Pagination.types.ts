import type { ComponentPropsWithoutRef } from 'react';

export type PaginationSize = 'sm' | 'md' | 'lg';

export interface PaginationProps extends ComponentPropsWithoutRef<'nav'> {
   /** Current active page (1-based index) */
   page: number;
   /** Total number of available pages */
   totalPages: number;
   /** Number of visible page numbers on either side of active page */
   siblingCount?: number;
   /** Layout size configuration */
   size?: PaginationSize;
   /** Render navigation buttons to snap directly to page 1 or totalPages */
   showFirstLast?: boolean;
   /** Render standard incremental step previous/next controls */
   showPrevNext?: boolean;
   /** Event trigger callback emitted on active target selection change */
   onPageChange: (page: number) => void;
}
