import type { ReactNode, HTMLAttributes } from 'react';

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectOption {
   value: string;
   label: ReactNode;
   disabled?: boolean;
}

export interface SelectProps extends Omit<
   HTMLAttributes<HTMLDivElement>,
   'value' | 'defaultValue'
> {
   /** Collection of options to display */
   options?: SelectOption[];
   /** Controlled component value */
   value?: string;
   /** Initial value for uncontrolled usage */
   defaultValue?: string;
   /** Placeholder text shown when no option is selected */
   placeholder?: string;
   /** Disables interaction and updates visual state */
   disabled?: boolean;
   /** Form factor scale variant */
   size?: SelectSize;
   /** Toggles error boundary styling */
   error?: boolean;
   /** Displays loading spinner indicator inside list */
   loading?: boolean;
   /** Enables filtering and text input search matching */
   searchable?: boolean;
   /** Callback triggered on selective update */
   onValueChange?: (value: string) => void;
   /** Callback triggered on text field query mutation */
   onSearch?: (query: string) => void;
   /** Occupy full width */
   fluid?: boolean;
}

export interface SelectResultsProps extends HTMLAttributes<HTMLDivElement> {
   options: SelectOption[];
   open: boolean;
   size: SelectSize;
   loading?: boolean;
   value?: string;
   highlightedIndex: number | null;
   onItemSelect: (value: string) => void;
}
