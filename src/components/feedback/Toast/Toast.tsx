import { forwardRef } from 'react';
import type { ToastProps, ToastVariant } from './Toast.types';
import { AnimatePresence } from 'motion/react';
import styles from './Toast.module.scss';
import { Button } from '@/components/general';
import { Icon } from '@/components/data-display';
import type { icons } from '@/components/data-display/Icon/icons';
import clsx from 'clsx';

const ICON_MAPPING: Record<ToastVariant, keyof typeof icons> = {
   error: 'Error',
   info: 'Info',
   success: 'Success',
   warning: 'Warning',
};

export const Toast = forwardRef<HTMLDivElement, ToastProps>((props, ref) => {
   const { id, onClose, message, className, variant = 'info', ...rest } = props;
   return (
      <AnimatePresence mode="popLayout">
         <div
            ref={ref}
            className={clsx(styles.toast, styles[variant])}
            {...rest}
         >
            <div className={styles.message}>
               <div className={styles.indicator}>
                  <Icon name={ICON_MAPPING[variant]} />
               </div>
               <span>{message}</span>
            </div>
            <Button
               size="sm"
               icon={<Icon name="Cross" />}
               onClick={() => onClose(id)}
               variant="text"
            />
         </div>
      </AnimatePresence>
   );
});

Toast.displayName = 'Toast';
