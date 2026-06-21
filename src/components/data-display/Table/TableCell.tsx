import clsx from 'clsx';
import { forwardRef } from 'react';
import styles from './Table.module.scss';

export const TableCell = forwardRef<
   HTMLTableCellElement,
   React.TdHTMLAttributes<HTMLTableCellElement>
>((props, ref) => {
   const { align = 'left', className, ...rest } = props;

   return (
      <td
         ref={ref}
         className={clsx(styles.cell, styles[`align-${align}`], className)}
         {...rest}
      />
   );
});

TableCell.displayName = 'TableCell';
