import type { ComponentPropsWithoutRef, ElementType } from 'react';

export type TextVariant =
   | 'h1'
   | 'h2'
   | 'h3'
   | 'h4'
   | 'h5'
   | 'h6'
   | 'body'
   | 'small'
   | 'caption';

export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export interface TextProps extends ComponentPropsWithoutRef<'p'> {
   /** Controls the visual style and hierarchy of the text */
   variant?: TextVariant;
   /** The underlying HTML element or React component to render */
   as?: ElementType;
   /** Horizontal alignment of the text */
   align?: TextAlign;
   /** Max number of lines to display before truncating with (...) */
   truncate?: number;
   /** If true, applies a line-through text decoration */
   strikeThrough?: boolean;
}
