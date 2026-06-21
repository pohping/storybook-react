import type { ComponentPropsWithoutRef } from 'react';

export type NumberInputSize = 'sm' | 'md' | 'lg';

export interface NumberInputProps extends Omit<
   ComponentPropsWithoutRef<'input'>,
   'size' | 'onChange' | 'value' | 'defaultValue'
> {
   /** Size variant of the input */
   size?: NumberInputSize;
   /** Minimum allowed value */
   min?: number;
   /** Maximum allowed value */
   max?: number;
   /** Step amount for increment/decrement controls */
   step?: number;
   /** Current value (for controlled usage) */
   value?: number | string | null;
   /** Default value (for uncontrolled usage) */
   defaultValue?: number | string | null;
   /** Whether to show the increment/decrement buttons */
   controls?: boolean;
   /** Optional manual error state (outside of form context) */
   error?: boolean;
   /** Format the displayed value (e.g., add currency symbols) */
   formatter?: (value: number) => string;
   /** Parse the input string back to a number */
   parser?: (value: string) => number;
   /** Callback when value changes */
   onChange?: (value: number | null) => void;
}

export type NumberInputRef = HTMLDivElement;
