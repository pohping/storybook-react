import { forwardRef, useLayoutEffect, useRef } from 'react';
import clsx from 'clsx';
import type { SelectResultsProps } from './Select.types';
import { Portal } from '@/components/layout';
import { Icon } from '@/components/data-display';
import styles from './Select.module.scss';

export const SelectResults = forwardRef<HTMLDivElement, SelectResultsProps>(
   (
      {
         open,
         size,
         loading,
         options,
         value,
         highlightedIndex,
         onItemSelect,
         className,
         ...rest
      },
      ref,
   ) => {
      const listRef = useRef<HTMLUListElement>(null);

      // Perform smooth listing containment viewport corrections for focused index keys
      useLayoutEffect(() => {
         if (!open || !listRef.current || highlightedIndex === null) return;

         const list = listRef.current;
         const currentItem = list.children?.[highlightedIndex] as
            | HTMLLIElement
            | undefined;

         if (!currentItem) return;

         const itemRect = currentItem.getBoundingClientRect();
         const listRect = list.getBoundingClientRect();

         if (itemRect.bottom > listRect.bottom) {
            list.scroll({
               top: currentItem.offsetTop - listRect.height + itemRect.height,
               behavior: 'smooth',
            });
         } else if (itemRect.y < listRect.y) {
            list.scroll({
               top: currentItem.offsetTop,
               behavior: 'smooth',
            });
         }
      }, [highlightedIndex, open]);

      if (!open) return null;

      return (
         <Portal open={open}>
            <div
               ref={ref}
               role="listbox"
               className={clsx(styles.results, styles[size], className)}
               {...rest}
            >
               <ul ref={listRef} className={styles.list}>
                  {loading ? (
                     <div className={styles.loader} data-testid="select-loader">
                        <Icon spin name="Loading" />
                     </div>
                  ) : options.length === 0 ? (
                     <div className={styles.empty}>No options</div>
                  ) : (
                     options.map((option, index) => (
                        <li
                           key={option.value}
                           role="option"
                           aria-selected={option.value === value}
                           onClick={(e) => {
                              e.stopPropagation();
                              if (!option.disabled) {
                                 onItemSelect(option.value);
                              }
                           }}
                           className={clsx(styles.item, {
                              [styles.highlighted]: highlightedIndex === index,
                              [styles.selected]: option.value === value,
                              [styles.disabled]: option.disabled,
                           })}
                        >
                           {option.label}
                        </li>
                     ))
                  )}
               </ul>
            </div>
         </Portal>
      );
   },
);

SelectResults.displayName = 'SelectResults';
