import type { ComponentPropsWithoutRef } from 'react';

/** Visual sizing choices available for the checkbox component */
export type CheckboxSize = 'sm' | 'md' | 'lg';

export interface CheckboxProps extends Omit<
   ComponentPropsWithoutRef<'input'>,
   'size'
> {
   /** Size variant of the checkbox */
   size?: CheckboxSize;
   /** Label text or element displayed next to the checkbox */
   label?: React.ReactNode;
}

export type CheckboxRef = HTMLInputElement;
