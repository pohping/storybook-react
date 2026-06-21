import { forwardRef } from 'react';
import clsx from 'clsx';
import type { TableProps } from './Table.types';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { TableRow } from './TableRow';
import { TableHead } from './TableHead';
import { TableCell } from './TableCell';
import styles from './Table.module.scss';

const TableRoot = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
   const { size = 'md', striped, className, children, ...rest } = props;

   return (
      <div className={clsx(styles.tableContainer, className)}>
         <table
            ref={ref}
            className={clsx(styles.table, styles[size], {
               [styles.striped]: striped,
            })}
            {...rest}
         >
            {children}
         </table>
      </div>
   );
});

TableRoot.displayName = 'Table';

export const Table = Object.assign(TableRoot, {
   Header: TableHeader,
   Body: TableBody,
   Row: TableRow,
   Head: TableHead,
   Cell: TableCell,
});
