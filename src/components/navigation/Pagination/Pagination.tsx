import { forwardRef } from 'react';
import { Icon } from '@/components/data-display';
import type { PaginationProps } from './Pagination.types';
import styles from './Pagination.module.scss';
import clsx from 'clsx';

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
   (props, ref) => {
      const {
         page = 1,
         totalPages = 1,
         siblingCount = 1,
         size = 'md',
         className,
         showFirstLast = true,
         showPrevNext = true,
         onPageChange,
         ...rest
      } = props;
      if (totalPages <= 1) return null;

      const range = (start: number, end: number) =>
         Array.from({ length: end - start + 1 }, (_, i) => start + i);

      const getPages = () => {
         const totalPageNumbers = siblingCount * 2 + 5;
         if (totalPageNumbers >= totalPages) return range(1, totalPages);

         const leftSiblingIndex = Math.max(page - siblingCount, 1);
         const rightSiblingIndex = Math.min(page + siblingCount, totalPages);

         const shouldShowLeftDots = leftSiblingIndex > 3;
         const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

         if (!shouldShowLeftDots && shouldShowRightDots) {
            return [...range(1, 3 + 2 * siblingCount), '...', totalPages];
         }
         if (shouldShowLeftDots && !shouldShowRightDots) {
            return [
               1,
               '...',
               ...range(totalPages - (3 + 2 * siblingCount) + 1, totalPages),
            ];
         }
         return [
            1,
            '...',
            ...range(leftSiblingIndex, rightSiblingIndex),
            '...',
            totalPages,
         ];
      };

      const pages = getPages();

      const handlePageClick = (targetPage: number) => {
         if (
            targetPage >= 1 &&
            targetPage <= totalPages &&
            targetPage !== page
         ) {
            onPageChange(targetPage);
         }
      };

      return (
         <nav
            ref={ref}
            className={clsx(styles.pagination, styles[size], className)}
            aria-label="pagination navigation"
            {...rest}
         >
            <ul className={styles.list}>
               {showFirstLast && (
                  <li className={styles.item}>
                     <button
                        className={clsx(
                           styles.pageButton,
                           { [styles.disabled]: page === 1 },
                           //    page === 1 && styles.disabled,
                        )}
                        onClick={() => handlePageClick(1)}
                        disabled={page === 1}
                        aria-label="Go to first page"
                     >
                        <Icon name="DoubleArrowLeft" size="sm" />
                     </button>
                  </li>
               )}
               {showPrevNext && (
                  <li className={styles.item}>
                     <button
                        className={clsx(
                           styles.pageButton,
                           page === 1 && styles.disabled,
                        )}
                        onClick={() => handlePageClick(page - 1)}
                        disabled={page === 1}
                        aria-label="Go to previous page"
                     >
                        <Icon name="ArrowLeft" size="sm" />
                     </button>
                  </li>
               )}

               {pages.map((item, idx) => (
                  <li key={idx} className={styles.item}>
                     {item === '...' ? (
                        <span className={styles.ellipsis} aria-hidden="true">
                           &#8230;
                        </span>
                     ) : (
                        <button
                           className={clsx(
                              styles.pageButton,
                              item === page && styles.active,
                           )}
                           onClick={() => handlePageClick(Number(item))}
                           aria-current={item === page ? 'page' : undefined}
                           aria-label={`Go to page ${item}`}
                        >
                           {item}
                        </button>
                     )}
                  </li>
               ))}

               {showPrevNext && (
                  <li className={styles.item}>
                     <button
                        className={clsx(
                           styles.pageButton,
                           page === totalPages && styles.disabled,
                        )}
                        onClick={() => handlePageClick(page + 1)}
                        disabled={page === totalPages}
                        aria-label="Go to next page"
                     >
                        <Icon name="ArrowRight" size="sm" />
                     </button>
                  </li>
               )}
               {showFirstLast && (
                  <li className={styles.item}>
                     <button
                        className={clsx(
                           styles.pageButton,
                           page === totalPages && styles.disabled,
                        )}
                        onClick={() => handlePageClick(totalPages)}
                        disabled={page === totalPages}
                        aria-label="Go to last page"
                     >
                        <Icon name="DoubleArrowRight" size="sm" />
                     </button>
                  </li>
               )}
            </ul>
         </nav>
      );
   },
);

Pagination.displayName = 'Pagination';
