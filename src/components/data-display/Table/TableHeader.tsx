import { forwardRef } from 'react';
import type { TableSectionProps } from './Table.types';
import styles from './Table.module.scss';

export const TableHeader = forwardRef<
   HTMLTableSectionElement,
   TableSectionProps
>((props, ref) => <thead ref={ref} className={styles.header} {...props} />);

TableHeader.displayName = 'TableHeader';
