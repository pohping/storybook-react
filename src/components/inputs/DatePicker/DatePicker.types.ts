import type { ComponentPropsWithoutRef } from 'react';

/** Visual sizing chooices available for the datePicker component */
export type DatePickerSize = 'sm' | 'md' | 'lg';

export interface DatePickerProps extends Omit<
   ComponentPropsWithoutRef<'div'>,
   'onChange' | 'defaultValue'
> {
   /** Currently selected date (ISO string or Date object) */
   value?: string | Date;
   /** Callback when a date is selected */
   onChange?: (value: string, date: Date) => void;
   /** Size variant of the input */
   size?: DatePickerSize;
   /** Control whether the input is disabled */
   disabled?: boolean;
   /** Whether to show an error state manually */
   error?: boolean;
   /** Optional container element for the calendar portal. Defaults to document.body */
   portalContainer?: HTMLElement | null;
}

export type DatePickerRef = HTMLDivElement;
