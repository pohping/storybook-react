import type { ComponentPropsWithoutRef } from 'react';

export type PasswordInputSize = 'sm' | 'md' | 'lg';

export interface PasswordInputProps extends Omit<
   ComponentPropsWithoutRef<'input'>,
   'size'
> {
   /** Size variant of the input */
   size?: PasswordInputSize;
   /** Optional manual error state (outside of Form context) */
   error?: boolean | string;
   /** Optional manual success state */
   success?: boolean;
}

export type PasswordInputRef = HTMLInputElement;
