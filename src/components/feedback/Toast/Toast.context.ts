import { createContext, useContext } from 'react';
import type { ToastContextProps } from './Toast.types';

export const ToastContext = createContext<ToastContextProps | undefined>(
   undefined,
);

export const useToastContext = () => {
   const ctx = useContext(ToastContext);
   if (!ctx) throw new Error('useToast must be used within ToastProvider');
   return ctx;
};
