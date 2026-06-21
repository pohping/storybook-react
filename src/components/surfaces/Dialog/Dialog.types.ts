import type { ComponentPropsWithoutRef, ComponentPropsWithRef } from 'react';

export interface DialogProps extends ComponentPropsWithoutRef<'div'> {
   /** Controlled visibility state of the dialog. */
   open?: boolean;
   /** The initial visibility state of the dialog when rendered in an uncontrolled fashion */
   defaultOpen?: boolean;
   /** Automatically fires the `onCancel` closure when the user presses the 'Escape' */
   closeOnEsc?: boolean;
   /** Primary text headline rendered at the top of the modal viewport for semantic context */
   title?: string;
   /** Custom label string text overlay printed on the primary actions execution confirmation button */ confirmButton?: string;
   cancelButton?: string;
   /** Callback triggered when the modal is closed */
   onCancel?: () => void;
   /** Callback triggered when clicking the primary action/confirmation button */
   onConfirm?: () => void;
}

export interface DialogContentProps extends ComponentPropsWithRef<'div'> {}
