import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type TableSize = 'sm' | 'md' | 'lg';
export type TableVariant = 'default' | 'striped' | 'bordered' | 'ghost';

export interface TableProps extends ComponentPropsWithoutRef<'table'> {
   /** Size of the table */
   size?: TableSize;
   /** If true, the table will take up the full width of its container */
   fullWidth?: boolean;
   /** If true, applies striped row styling */
   striped?: boolean;
   /** If true, adds borders around cells and the table */
   bordered?: boolean;
   /** Optional caption text or element for the table */
   caption?: ReactNode;
}

export interface TableSectionProps extends ComponentPropsWithoutRef<'thead'> {}

export interface TableBodyProps extends ComponentPropsWithoutRef<'tbody'> {}

export interface TableRowProps extends ComponentPropsWithoutRef<'tr'> {}

export interface TableCellProps extends ComponentPropsWithoutRef<'td'> {
   /** Horizontal alignment of content in the cell */
   align?: 'left' | 'center' | 'right';
}
