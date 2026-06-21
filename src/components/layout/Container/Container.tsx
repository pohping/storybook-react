import { forwardRef } from 'react';
import clsx from 'clsx';
import type { ContainerProps, ContainerRef } from './Container.types';
import styles from './Container.module.scss';

export const Container = forwardRef<ContainerRef, ContainerProps>(
   (props, ref) => {
      const { fluid = false, children, className, ...rest } = props;

      return (
         <div
            ref={ref}
            className={clsx(
               styles.container,
               { [styles.fluid]: fluid },
               className,
            )}
            {...rest}
         >
            {children}
         </div>
      );
   },
);

Container.displayName = 'Container';
