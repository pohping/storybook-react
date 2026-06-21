import clsx from 'clsx';
import { forwardRef } from 'react';
import styles from './Table.module.scss';

export const TableHead = forwardRef<
   HTMLTableCellElement,
   React.ThHTMLAttributes<HTMLTableCellElement>
>((props, ref) => {
   const { align = 'left', className, ...rest } = props;
   return (
      <th
         ref={ref}
         className={clsx(styles.head, styles[`align-${align}`], className)}
         {...rest}
      />
   );
});

TableHead.displayName = 'TableHead';
