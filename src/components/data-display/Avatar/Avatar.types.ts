import type { ComponentPropsWithoutRef } from 'react';

export type AvatarSize = 'sm' | 'md' | 'lg' | number | string;

export interface AvatarProps extends ComponentPropsWithoutRef<'div'> {
   /** The source URL of the image to display */
   src?: string;
   /** Alternative text for the image */
   alt?: string;
   /** The sizes of the avatar */
   size?: AvatarSize;
   /** Optional fallback text */
   initials?: string;
}
