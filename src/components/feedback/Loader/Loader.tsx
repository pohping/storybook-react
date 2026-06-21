import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import type { LoaderProps } from './Loader.types';
import styles from './Loader.module.scss';
import { Icon } from '@/components/data-display';

export const Loader: React.FC<LoaderProps> = ({
   variant = 'inline',
   active = true,
   className,
   minDisplayMs = 300,
   ...rest
}) => {
   const [visible, setVisible] = useState(active);
   const [lastShownAt, setLastShownAt] = useState<number | null>(
      active ? Date.now() : null,
   );

   useEffect(() => {
      if (active) {
         setVisible(true);
         setLastShownAt(Date.now());
         return;
      }

      // If already hidden, do nothing
      if (!visible) return;

      const elapsed = lastShownAt ? Date.now() - lastShownAt : minDisplayMs;
      const remaining = Math.max(0, minDisplayMs - elapsed);

      const t = setTimeout(() => setVisible(false), remaining);
      return () => clearTimeout(t);
   }, [active, minDisplayMs, lastShownAt, visible]);

   // FIXED: Only unmount when BOTH active requested state and the minimum display duration window have expired
   if (!active && !visible) {
      return null;
   }

   return (
      <div
         className={clsx(
            styles.loader,
            visible && styles.visible,
            variant === 'page' && styles.page,
            className,
         )}
         role="status"
         aria-live="polite"
         aria-hidden={!visible}
         {...rest}
      >
         <Icon className={styles.spinner} name="Loading" />
      </div>
   );
};
