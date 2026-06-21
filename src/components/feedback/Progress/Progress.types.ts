import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type ProgressSize = 'sm' | 'md' | 'lg';
export type ProgressVariant = 'default' | 'striped' | 'gradient';

export interface ProgressProps extends ComponentPropsWithoutRef<'div'> {
   /** Progress value from 0 to 100 */
   value: number;
   /** Optional max value (default: 100) */
   max?: number;
   /** The sizes of the progress */
   size?: ProgressSize;
   /** Visual style of progress */
   variant?: ProgressVariant;
   /** The value label to be shown */
   label?: ReactNode;
   /** If true, show percentage text */
   showValue?: boolean;
   /** Custom color (overrides theme primary) */
   color?: string;
}
