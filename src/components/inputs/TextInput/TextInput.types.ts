import type { ComponentPropsWithoutRef } from 'react';

export type TextInputSize = 'sm' | 'md' | 'lg';

export interface TextInputProps extends Omit<
   ComponentPropsWithoutRef<'input'>,
   'size'
> {
   /** Size variant of the input field */
   size?: TextInputSize;
   /** Applies error styling when true */
   error?: boolean;
}

export type TextInputRef = HTMLInputElement;
