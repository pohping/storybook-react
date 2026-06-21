import { forwardRef } from 'react';
import type { TableBodyProps } from './Table.types';

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
   (props, ref) => <tbody ref={ref} {...props} />,
);

TableBody.displayName = 'TableBody';
