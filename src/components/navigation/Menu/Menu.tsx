import { MenuContext } from './MenuContext';
import { MenuItem } from './MenuItem';
import { MenuSub } from './MenuSub';
import clsx from 'clsx';
import type { MenuComponent, MenuProps } from './Menu.types';
import styles from './Menu.module.scss';

export const Menu = (({
   orientation = 'vertical',
   children,
   className,
   ...rest
}: MenuProps) => {
   return (
      <MenuContext.Provider value={{ orientation }}>
         <nav
            className={clsx(
               styles.menu,
               orientation === 'vertical' ? styles.vertical : styles.horizontal,
               className,
            )}
            role="menu"
            {...rest}
         >
            <ul className={styles.list}>{children}</ul>
         </nav>
      </MenuContext.Provider>
   );
}) as MenuComponent;

Menu.Item = MenuItem;
Menu.Sub = MenuSub;
