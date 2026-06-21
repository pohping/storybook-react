import type {
   ComponentPropsWithoutRef,
   ElementType,
   FC,
   ReactNode,
   ReactElement,
} from 'react';
import type { MenuSub } from './MenuSub';

/** The layout arrangement of the main menu bar framework */
export type MenuOrientation = 'horizontal' | 'vertical';

export interface MenuContextValue {
   /** The layout layout distribution rule matching the menu's main shell */
   orientation: MenuOrientation;
}

export interface MenuSubContextValue {
   /** Explicit visibility state flag for the dropdown container */
   open: boolean;
   /** State dispatcher to toggle or set the submenu visibility explicitly */
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MenuProps extends ComponentPropsWithoutRef<'nav'> {
   /** Dictates whether the items inside lay out side-by-side or stacked on top of each other */
   orientation?: MenuOrientation;
   /** Structural composition nodes */
   children?: ReactNode;
}

export interface MenuSubProps extends ComponentPropsWithoutRef<'li'> {
   /** The display label, icon, or string text that triggers the visibility toggle of the nested submenu item tree */
   label: ReactNode;
   /** Nested child nodes */
   children: ReactNode;
}

export interface MenuItemOwnProps<E extends ElementType = 'li'> {
   as?: E;
   /** Visual highlight flag marking this item as the active current destination path or state selection */
   active?: boolean;
   /** The core display node text or markup structure contained in the block link target */
   children: ReactNode;
}

export type MenuItemProps<E extends ElementType = 'li'> = MenuItemOwnProps<E> &
   Omit<ComponentPropsWithoutRef<E>, keyof MenuItemOwnProps<E>>;

export type MenuComponent = FC<MenuProps> & {
   // Update the signature here to handle the generic function element correctly
   Item: <E extends ElementType = 'li'>(
      props: MenuItemProps<E>,
   ) => ReactElement | null;
   /** Nested overlay dropdown layer container wrapper for multi-tier navigation systems */
   Sub: typeof MenuSub;
};
