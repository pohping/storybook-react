import type { ReactNode } from 'react';

export interface PortalProps {
   /** Content to render */
   children: ReactNode;
   /** Custom container element */
   container?: HTMLElement | null;
   /** Only render when open (useful for modals/toasts) */
   open?: boolean;
}
