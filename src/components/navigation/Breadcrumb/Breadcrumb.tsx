import { Children, forwardRef } from 'react';
import type { BreadcrumbProps } from './Breadcrumb.types';
import styles from './Breadcrumb.module.scss';
import clsx from 'clsx';
import { Icon } from '@/components/data-display';

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
   (props, ref) => {
      const {
         children,
         separator = <Icon name="ArrowRight" />,
         className,
         ...rest
      } = props;

      const items = Children.toArray(children);

      return (
         <nav
            ref={ref}
            aria-label="Breadcrumb"
            className={clsx(styles.breadcrumb, className)}
            {...rest}
         >
            <ol className={styles.list}>
               {items.map((child, index) => {
                  const isLast = index === items.length - 1;

                  return (
                     <li
                        key={index}
                        className={clsx(styles.item, {
                           [styles.active]: isLast,
                        })}
                        aria-current={isLast ? 'page' : undefined}
                     >
                        {child}
                        {!isLast && (
                           <span
                              className={styles.separator}
                              aria-hidden="true"
                           >
                              {separator}
                           </span>
                        )}
                     </li>
                  );
               })}
            </ol>
         </nav>
      );
   },
);

Breadcrumb.displayName = 'Breadcrumb';
