import { useEffect, type ElementType } from 'react';
import { useMenuContext, useMenuSubContext } from './MenuContext';
import styles from './Menu.module.scss';
import clsx from 'clsx';
import type { MenuItemProps } from './Menu.types';

export const MenuItem = <E extends ElementType = 'li'>({
   as,
   active,
   children,
   className,
   onClick,
   ...rest
}: MenuItemProps<E>) => {
   const { orientation } = useMenuContext();
   const subMenuCtx = useMenuSubContext();

   useEffect(() => {
      if (orientation === 'vertical' && active && subMenuCtx) {
         subMenuCtx.setOpen(true);
      }
   }, [orientation, active, subMenuCtx]);

   const handleItemClick = (e: React.MouseEvent<HTMLElement>) => {
      if (onClick) onClick(e as any);
      if (orientation === 'horizontal' && subMenuCtx) {
         subMenuCtx.setOpen(false);
      }
   };

   // Fallback to 'li' if no explicit 'as' prop is defined
   const Component = as || 'li';

   return (
      <Component
         role="menuitem"
         onClick={handleItemClick}
         className={clsx(styles.item, active && styles.active, className)}
         {...rest}
      >
         {children}
      </Component>
   );
};
