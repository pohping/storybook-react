import { createContext, useContext } from 'react';
import type { MenuContextValue, MenuSubContextValue } from './Menu.types';

export const MenuContext = createContext<MenuContextValue | null>(null);

export const useMenuContext = () => {
   const ctx = useContext(MenuContext);
   if (!ctx)
      throw new Error(
         'Menu sub-components must be rendered within a <Menu> provider.',
      );
   return ctx;
};

export const MenuSubContext = createContext<MenuSubContextValue | null>(null);

export const useMenuSubContext = () => {
   return useContext(MenuSubContext); // Optional context; elements don't strictly have to be inside a Submenu
};
