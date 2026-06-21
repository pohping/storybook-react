import type { ComponentPropsWithoutRef, ElementType } from 'react';
import type { icons } from './icons';

export type IconName = keyof typeof icons;
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | string;

export interface IconProps extends ComponentPropsWithoutRef<'span'> {
   /** The name of the icon to display */
   name: IconName;
   /** Size of the icon */
   size?: IconSize;
   /** Color of the icon */
   color?: string;
   /** If true, the icon will rotate continuously */
   spin?: boolean;
   /** Accessible title/description for the icon */
   title?: string;
   /** The HTML element or component to render the icon as */
   as?: ElementType;
}
