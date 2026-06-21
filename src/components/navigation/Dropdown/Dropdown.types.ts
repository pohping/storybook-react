import type { Placement } from '@floating-ui/react';
import type { ComponentPropsWithoutRef, ReactNode, MouseEvent } from 'react';

export interface DropdownMenuItem {
   /** Unique identifier for the item (highly recommended for list stability) */
   key?: string | number;
   /** Content of the menu item */
   label?: ReactNode;
   /** Optional icon element */
   icon?: ReactNode;
   /** Disabled state for the item */
   disabled?: boolean;
   /** Danger styling (e.g., for delete/remove actions) */
   danger?: boolean;
   /** Click handler */
   onClick?: (e: MouseEvent) => void;
   /** Render this item as a visual divider instead of a clickable option */
   divider?: boolean;
}

export interface DropdownProps extends Omit<
   ComponentPropsWithoutRef<'span'>,
   'children'
> {
   /** Element that triggers the dropdown */
   children: ReactNode;
   /** Array of menu item configurations */
   menu: DropdownMenuItem[];
   /** Controlled open state */
   open?: boolean;
   /** Default open state (uncontrolled) */
   defaultOpen?: boolean;
   /** Callback fired when the open state changes */
   onOpenChange?: (open: boolean) => void;
   /** Preferred placement of the dropdown */
   placement?: Placement;
   /** Disables the dropdown trigger completely */
   disabled?: boolean;
   /** Interaction type required to open the menu */
   trigger?: 'hover' | 'click';
}
