import type { ComponentPropsWithoutRef } from 'react';

/** Layout arrangement of the divider line */
export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps extends ComponentPropsWithoutRef<'div'> {
   /** Control whether the divider renders as horizontal or a vertical line */
   orientation?: DividerOrientation;
}
