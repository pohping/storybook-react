import clsx from 'clsx';
import { type MouseEvent } from 'react';
import type { DialogProps } from './Dialog.types';
import { useDialog } from './hooks/use-dialog';
import { Button } from '@/components/general';
import { Portal } from '@/components/layout';
import styles from './Dialog.module.scss';

export const Dialog = ({
   open,
   className,
   title = 'Confirmation',
   children = 'Are you sure you want to continue?',
   confirmButton = 'Ok',
   cancelButton = 'Cancel',
   onCancel,
   onConfirm,
   closeOnEsc = true,
   defaultOpen = false,
   ...rest
}: DialogProps) => {
   const { isOpen } = useDialog({
      open,
      defaultOpen,
      closeOnEsc,
      onCancel,
   });

   const handleOutsideClick = (e: MouseEvent) => {
      if (e.target === e.currentTarget) {
         close();
      }
   };

   const handleCancelClick = () => {
      onCancel?.();
   };

   const handleConfirmClick = () => {
      onConfirm?.();
   };

   if (!isOpen) return null;

   const showFooter = onCancel || onConfirm;

   return (
      <Portal open={isOpen}>
         <div className={clsx(styles.dialog, className)} {...rest}>
            <div className={styles.inner} onClick={handleOutsideClick}>
               <section className={styles.content}>
                  <div className={styles.header}>{title}</div>
                  <div className={styles.body}>{children}</div>
                  {showFooter && (
                     <div className={styles.footer}>
                        <Button variant="secondary" onClick={handleCancelClick}>
                           {cancelButton}
                        </Button>
                        <Button variant="primary" onClick={handleConfirmClick}>
                           {confirmButton}
                        </Button>
                     </div>
                  )}
               </section>
            </div>
         </div>
      </Portal>
   );
};
