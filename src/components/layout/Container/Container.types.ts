import type { ComponentPropsWithoutRef, ComponentRef } from 'react';

export interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
   /** If true, the container expands to occupy 100% of the available viewport width */
   fluid?: boolean;
}

export interface ContainerRef extends ComponentRef<'div'> {}
