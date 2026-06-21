import type { ComponentPropsWithoutRef, ReactNode } from 'react';

/** Size variant applied to the rating */
export type RatingSize = 'sm' | 'md' | 'lg';

export interface RatingProps extends Omit<
   ComponentPropsWithoutRef<'div'>,
   'onChange' | 'defaultValue'
> {
   /** Current value (controlled mode) */
   value?: number;
   /** Default value (uncontrolled mode) */
   defaultValue?: number;
   /** Maximum number of stars */
   count?: number;
   /** Allow half star selection */
   allowHalf?: boolean;
   /** Read-only mode prevents user interaction */
   readOnly?: boolean;
   /** Size variant of the stars */
   size?: RatingSize;
   /** Optional text or element displayed next to the stars */
   label?: ReactNode;
   /** Callback when value changes */
   onChange?: (value: number) => void;
   /** Callback when hovering over stars */
   onHoverChange?: (value: number) => void;
}

export type RatingRef = HTMLDivElement;
