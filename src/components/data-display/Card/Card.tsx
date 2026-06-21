import clsx from 'clsx';
import React, { forwardRef } from 'react';
import type { CardProps } from './Card.types';
import { CardCover } from './CardCover';
import { CardContent } from './CardContent';
import styles from './Card.module.scss';

export const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
   const {
      variant = 'elevated',
      padded = true,
      className,
      children,
      ...rest
   } = props;

   return (
      <div
         ref={ref}
         className={clsx(
            styles.card,
            styles[variant],
            padded && styles.padded,
            className,
         )}
         {...rest}
      >
         {children}
      </div>
   );
}) as React.ForwardRefExoticComponent<
   CardProps & React.RefAttributes<HTMLDivElement>
> & {
   Cover: typeof CardCover;
   Content: typeof CardContent;
};

Card.Cover = CardCover;
Card.Content = CardContent;
Card.displayName = 'Card';
