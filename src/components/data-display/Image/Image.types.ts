import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

export interface ImageProps extends Omit<
   ComponentPropsWithoutRef<'img'>,
   'width' | 'height'
> {
   /** How the image should resize to fit its container */
   fit?: ObjectFit;
   /** Width of the image */
   width?: string | number;
   /** Height of the image */
   height?: string | number;
   /** Aspect ratio of the image container */
   aspectRatio?: number | string;
   /** Fallback content to show if the image fails to load */
   fallback?: ReactNode;
   /** Placeholder style shown while the image is loading */
   placeholder?: 'shimmer' | 'none';
}

export type ImageRef = HTMLDivElement;
