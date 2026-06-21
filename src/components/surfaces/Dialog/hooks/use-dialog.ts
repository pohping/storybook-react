import { useEventListener } from '@/hooks';
import { useCallback, useEffect, useState } from 'react';
import type { DialogProps } from '../Dialog.types';

export const useDialog = ({
   open,
   defaultOpen = false,
   onCancel,
   closeOnEsc = true,
}: Pick<DialogProps, 'open' | 'defaultOpen' | 'onCancel' | 'closeOnEsc'>) => {
   const [internalOpen, setInternalOpen] = useState(defaultOpen);
   const isControlled = open !== undefined;
   const isOpen = isControlled ? open : internalOpen;

   const close = useCallback(() => {
      if (!isControlled) setInternalOpen(false);
      onCancel?.();
   }, [isControlled, onCancel]);

   const openDialog = useCallback(() => {
      if (!isControlled) setInternalOpen(true);
   }, []);

   // body scroll lock
   useEffect(() => {
      if (isOpen) {
         const prev = document.body.style.overflow;
         document.body.style.overflow = 'hidden';

         return () => {
            document.body.style.overflow = prev;
         };
      }
   }, [isOpen]);

   // escape key
   useEventListener('keydown', (e) => {
      if (!closeOnEsc || !isOpen) return;

      if (e.key === 'Escape') {
         e.preventDefault();
         close();
      }
   });

   return {
      isOpen,
      open: openDialog,
      close,
   };
};
