import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type BadgeVariant =
   | 'primary'
   | 'success'
   | 'danger'
   | 'warning'
   | 'neutral';

export interface BadgeProps extends ComponentPropsWithoutRef<'div'> {
   /** Content to display inside the badge */
   children?: ReactNode;
   /** Numeric count to display */
   count?: number;
   /** Custom text to display */
   text?: string | null;
   /** If true, renders a small dot instead of full badge */
   dot?: boolean;
   /** Maximun count to show before displaying "+N" */
   maxCount?: number;
   /** Style variant of the badge */
   variant?: BadgeVariant;
   /** Offset position of the badge */
   offset?: [number | string, number | string];
}
