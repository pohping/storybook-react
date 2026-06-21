import type { ComponentPropsWithoutRef, ReactNode } from 'react';

/** Visual styles and severity levels available for a toast notification */
export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface ToastItem {
   /** Unique identifier for managing the life cycle of the toast */
   id: string;
   /** The notification message to display */
   message: string;
   /** The semantic type variant of the toast */
   variant: ToastVariant;
}

export interface ToastContextProps {
   showToast: (
      message: string,
      variant?: ToastVariant,
      duration?: number,
   ) => void;
}

export interface ToastProps extends ComponentPropsWithoutRef<'div'> {
   /** Unique identifier for this toast instance */
   id: string;
   /** Optional override text message to render inside the alert */
   message?: string;
   /** The visual theme variant applied to this toast */
   variant?: ToastVariant;
   /** Callback triggered when the toast is closed, either by auto-expiry */
   onClose: (id: string) => void;
}

export interface ToastProviderProps {
   /** The component tree that will have access to the `showToast` trigger hook */
   children: ReactNode;
}
