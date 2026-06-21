import clsx from 'clsx';
import { forwardRef } from 'react';
import styles from './Card.module.scss';
import type { CardContentProps } from './Card.types';

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
   (props, ref) => {
      const { children, className, textAlign = 'left', ...rest } = props;
      return (
         <div
            ref={ref}
            className={clsx(styles.content, styles[textAlign], className)}
            {...rest}
         >
            {children}
         </div>
      );
   },
);
CardContent.displayName = 'Card.Content';
