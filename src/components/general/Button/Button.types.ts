import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export type IconPosition = 'start' | 'end';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'link';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
   /** Visual style of the button */
   variant?: ButtonVariant;
   /** Size variant of the button */
   size?: ButtonSize;
   /** Make the button span 100% width */
   fullWidth?: boolean;
   /** Show loading spinner and disable interactions */
   loading?: boolean;
   /** Icon element to display */
   icon?: ReactNode;
   /** Position of the icon relative to the text */
   iconPosition?: IconPosition;
}

export interface ButtonInnerProps {
   icon?: ReactNode;
   loading?: boolean;
   iconPosition: IconPosition;
   children?: ReactNode;
}

export type ButtonRef = HTMLButtonElement;
