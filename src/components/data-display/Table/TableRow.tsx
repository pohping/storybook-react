import { forwardRef } from 'react';
import type { TableRowProps } from './Table.types';
import styles from './Table.module.scss';

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
   (props, ref) => <tr ref={ref} className={styles.row} {...props} />,
);

TableRow.displayName = 'TableRow';
