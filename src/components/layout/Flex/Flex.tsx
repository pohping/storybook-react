import React, { forwardRef } from 'react';
import type { FlexProps, FlexRef } from './Flex.types';
import styles from './Flex.module.scss';
import clsx from 'clsx';

export const Flex = forwardRef<FlexRef, FlexProps>(
   (
      {
         direction = 'row',
         wrap = 'wrap',
         justify,
         align,
         gap = 1,
         children,
         className,
         ...rest
      },
      ref,
   ) => {
      return (
         <div
            ref={ref}
            className={clsx(
               styles.flex,
               styles[direction],
               styles[wrap],
               styles[`justify-${justify}`],
               styles[`align-${align}`],
               className,
            )}
            style={
               {
                  '--gap': `var(--space-${gap})`,
               } as React.CSSProperties
            }
            {...rest}
         >
            {children}
         </div>
      );
   },
);

Flex.displayName = 'Flex';
