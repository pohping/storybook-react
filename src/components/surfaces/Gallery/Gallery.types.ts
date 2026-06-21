import type { ComponentPropsWithoutRef } from 'react';

export interface GalleryProps extends ComponentPropsWithoutRef<'div'> {
   /** An array of media source objects containing asset paths */
   sources?: { original?: string; thumbnail?: string }[];
   /** The maximum number of visible thumbnail blocks to display in the initial preview layout */
   thumbnailShow?: number;
}
