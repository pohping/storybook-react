import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface BreadcrumbProps extends ComponentPropsWithoutRef<'nav'> {
   /** The breadcrumb items (usually links or text) */
   children?: ReactNode;
   /** Custom separator between items */
   separator?: ReactNode;
}
