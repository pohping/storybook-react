import type React from 'react';
import type {
   ToastItem,
   ToastProviderProps,
   ToastVariant,
} from './Toast.types';
import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toast } from './Toast';
import { ToastContext } from './Toast.context';

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
   const [toasts, setToasts] = useState<ToastItem[]>([]);

   const removeToast = useCallback((id: string) => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
   }, []);

   const showToast = useCallback(
      (message: string, variant: ToastVariant = 'info', duration = 4000) => {
         const id = Math.random().toString(36).substring(2);
         setToasts((prev) => [...prev, { id, message, variant }]);
         setTimeout(() => removeToast(id), duration);
      },
      [removeToast],
   );

   return (
      <ToastContext.Provider value={{ showToast }}>
         {children}
         {createPortal(
            <motion.div
               layout
               initial={false}
               style={{
                  position: 'fixed',
                  top: 16,
                  right: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  zIndex: 9999,
               }}
            >
               <AnimatePresence>
                  {toasts.map((toast) => (
                     <Toast key={toast.id} {...toast} onClose={removeToast} />
                  ))}
               </AnimatePresence>
            </motion.div>,
            document.body,
         )}
      </ToastContext.Provider>
   );
};
