import { Children, isValidElement } from 'react';
import type { MenuItemProps } from '../Menu.types';

export function hasActiveChild(children: React.ReactNode): boolean {
   return Children.toArray(children).some((child) => {
      if (!isValidElement<MenuItemProps>(child)) return false;

      if (child.props?.active) return true;

      // support nested Menu.Sub
      if (child.props?.children) {
         return hasActiveChild(child.props.children);
      }

      return false;
   });
}
