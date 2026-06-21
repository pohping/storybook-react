import { useEffect, useState } from 'react';
import type { PortalProps } from './Portal.types';
import { createPortal } from 'react-dom';

export const Portal: React.FC<PortalProps> = (props) => {
   const { children, container, open = true } = props;
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   // Guard for SSR and when closed
   if (!mounted || !open) {
      return null;
   }

   // Use provided container, fallback to body
   const target =
      container ?? (typeof document !== 'undefined' ? document.body : null);

   if (!target) {
      return null;
   }

   return createPortal(children, target);
};

Portal.displayName = 'Portal';
