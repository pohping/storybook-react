import type { ComponentPropsWithoutRef } from 'react';

export type CardElevation = 0 | 1 | 2 | 3;
export type CardVariant = 'elevated' | 'filled' | 'outlined' | 'ghost';
export type CoverFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';

export interface CardProps extends ComponentPropsWithoutRef<'div'> {
   /** Elevation level of the card (shadow depth) */
   elevation?: CardElevation;
   /** Whether card should have internal padding */
   padded?: boolean;
   /** Visual style variant of the card */
   variant?: CardVariant;
}

export interface CardCoverProps extends ComponentPropsWithoutRef<'div'> {
   /** Source URL of the cover image */
   src?: string;
   /** How the image should fit inside cover area */
   fit?: CoverFit;
   /** Aspect ratio of the cover image */
   aspectRatio?: string | number;
}

export interface CardContentProps extends ComponentPropsWithoutRef<'div'> {
   /** Horizontal text alignment of the content */
   textAlign?: 'center' | 'left' | 'right';
}
