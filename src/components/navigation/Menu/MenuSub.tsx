import clsx from 'clsx';
import { useEffect, useRef, useState, useMemo } from 'react';
import { useFloating, shift, flip, offset } from '@floating-ui/react';
import { MenuContext, MenuSubContext, useMenuContext } from './MenuContext';
import { Icon } from '@/components/data-display';
import { Portal } from '@/components/layout';
import { hasActiveChild } from './utils/menu-utils';
import type { MenuSubProps } from './Menu.types';
import styles from './Menu.module.scss';

export const MenuSub = ({
   label,
   children,
   className,
   ...rest
}: MenuSubProps) => {
   const { orientation } = useMenuContext();
   const menuListRef = useRef<HTMLUListElement>(null);

   // Pre-expand parent submenus instantly if a child matches active validation routes
   const activeInitialState = useMemo(
      () => hasActiveChild(children),
      [children],
   );
   const [open, setOpen] = useState(activeInitialState);
   const [listHeight, setListHeight] = useState(0);

   const { refs, floatingStyles } = useFloating<HTMLDivElement>({
      placement: orientation === 'horizontal' ? 'bottom-start' : 'right-start',
      open,
      onOpenChange: setOpen,
      middleware: [flip(), shift(), offset(8)],
   });

   // Recalculate heights dynamically to animate height elements seamlessly from 0 -> auto
   useEffect(() => {
      if (orientation === 'vertical' && menuListRef.current) {
         const resizeObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
               setListHeight(entry.target.scrollHeight);
            }
         });
         resizeObserver.observe(menuListRef.current);
         return () => resizeObserver.disconnect();
      }
   }, [orientation, children]);

   const toggle = () => setOpen((prev) => !prev);

   // Mouse event listeners for horizontal positioning overlays
   const hoverProps =
      orientation === 'horizontal'
         ? {
              onMouseEnter: () => setOpen(true),
              onMouseLeave: () => setOpen(false),
           }
         : {};

   return (
      <MenuSubContext.Provider value={{ open, setOpen }}>
         <li
            ref={orientation === 'horizontal' ? refs.setReference : undefined}
            className={clsx(
               styles.subContainer,
               { [styles.open]: open, [styles[orientation]]: orientation },
               className,
            )}
            {...hoverProps}
            {...rest}
         >
            {/* Submenu Header Trigger */}
            <div
               className={clsx(styles.item, styles.subTrigger)}
               onClick={orientation === 'vertical' ? toggle : undefined}
               role="button"
               aria-expanded={open}
            >
               <span className={styles.label}>{label}</span>
               <div className={styles.section}>
                  <Icon
                     name="ArrowDown"
                     className={clsx(styles.arrow, {
                        [styles.arrowOpen]: open,
                     })}
                  />
               </div>
            </div>

            {/* Vertical Layout: Accordion Transition Wrap */}
            {orientation === 'vertical' && (
               <div
                  className={styles.accordionWrapper}
                  style={{
                     height: open ? `${listHeight}px` : '0px',
                  }}
               >
                  <ul ref={menuListRef} className={styles.list}>
                     {children}
                  </ul>
               </div>
            )}

            {/* Horizontal Layout: Floating Overlay Dropdown */}
            {orientation === 'horizontal' && open && (
               <Portal>
                  <div
                     ref={refs.setFloating}
                     style={floatingStyles}
                     className={styles.floatingWrapper}
                     {...hoverProps}
                  >
                     {/* Keep internal configuration context intact for multi-nested loops */}
                     <MenuContext.Provider value={{ orientation: 'vertical' }}>
                        <ul className={styles.list}>{children}</ul>
                     </MenuContext.Provider>
                  </div>
               </Portal>
            )}
         </li>
      </MenuSubContext.Provider>
   );
};
