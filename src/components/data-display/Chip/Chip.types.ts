import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type ChipVariant = 'filled' | 'outlined' | 'ghost';
export type ChipSize = 'sm' | 'md';

export interface ChipProps extends ComponentPropsWithoutRef<'div'> {
   /** The main text content of the chip */
   label: string;
   /** Visual style variant of the chip */
   variant?: ChipVariant;
   /** Size of the chip */
   size?: ChipSize;
   /** Optional icon at the beginning of the chip */
   icon?: ReactNode;
   // Called when the close icon is clicked */
   onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
   /** If true, the chip will show hover/active states */
   clickable?: boolean;
}
