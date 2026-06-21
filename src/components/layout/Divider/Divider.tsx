import { forwardRef } from 'react';
import clsx from 'clsx';
import type { DividerProps } from './Divider.types';
import styles from './Divider.module.scss';

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
   (props, ref) => {
      const {
         orientation = 'horizontal',
         children,
         className,
         ...rest
      } = props;
      const isHorizontal = orientation === 'horizontal';

      return (
         <div
            ref={ref}
            className={clsx(styles.divider, className, styles[orientation])}
            {...rest}
         >
            {isHorizontal && children && (
               <span className={styles.text}>{children}</span>
            )}
         </div>
      );
   },
);

Divider.displayName = 'Divider';
