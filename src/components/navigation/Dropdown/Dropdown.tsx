import { forwardRef, useState } from 'react';
import {
   autoUpdate,
   flip,
   offset,
   shift,
   useFloating,
} from '@floating-ui/react';
import clsx from 'clsx';
import type { DropdownProps } from './Dropdown.types';
import { useHoverOutside, useOutsideClick, useMergeRefs } from '@/hooks';
import { Portal } from '@/components/layout';
import styles from './Dropdown.module.scss';

export const Dropdown = forwardRef<HTMLElement, DropdownProps>((props, ref) => {
   const {
      className,
      placement = 'bottom-start',
      open: controlledOpen,
      children,
      defaultOpen = false,
      disabled,
      trigger = 'hover',
      menu,
      onOpenChange,
      ...rest
   } = props;
   const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
   const isControlled = controlledOpen !== undefined;
   const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

   const { refs, floatingStyles } = useFloating<HTMLElement>({
      open: isOpen,
      onOpenChange: (newOpen) => {
         if (!isControlled) setUncontrolledOpen(newOpen);
         onOpenChange?.(newOpen);
      },
      placement,
      middleware: [offset(4), flip(), shift({ padding: 8 })],
      whileElementsMounted: autoUpdate,
   });

   // Crucial: Merge the forwarded ref with Floating UI's reference setter
   const mergedRef = useMergeRefs<HTMLElement>(ref, refs.setReference);

   const close = () => {
      if (!isControlled) setUncontrolledOpen(false);
      onOpenChange?.(false);
   };

   useOutsideClick([refs.domReference, refs.floating], close);

   useHoverOutside([refs.domReference, refs.floating], () => {
      if (trigger === 'hover') close();
   });

   const handleTriggerClick = () => {
      if (disabled || trigger !== 'click') return;
      if (!isControlled) setUncontrolledOpen(!isOpen);
      onOpenChange?.(!isOpen);
   };

   const handleTriggerMouseEnter = () => {
      if (disabled || trigger !== 'hover') return;
      if (!isControlled) setUncontrolledOpen(true);
      onOpenChange?.(true);
   };

   const handleItemClick =
      (item: (typeof menu)[number]) => (e: React.MouseEvent) => {
         if (item.disabled) return;
         item.onClick?.(e);
         close();
      };

   return (
      <>
         <span
            ref={mergedRef}
            className={clsx(
               styles.dropdown,
               { [styles.disabled]: disabled },
               className,
            )}
            onClick={handleTriggerClick}
            onMouseEnter={handleTriggerMouseEnter}
            aria-haspopup="menu"
            aria-expanded={isOpen}
            {...rest}
         >
            {children}
         </span>
         <Portal open={isOpen}>
            <div
               ref={refs.setFloating}
               className={styles.menu}
               style={floatingStyles}
               role="menu"
            >
               <ul className={styles.list}>
                  {menu.map((item, index) => {
                     const itemKey = item.key ?? index;

                     if (item.divider) {
                        return (
                           <li
                              key={itemKey}
                              className={styles.divider}
                              role="separator"
                           />
                        );
                     }

                     return (
                        <li
                           key={itemKey}
                           role="menuitem"
                           aria-disabled={item.disabled}
                           className={clsx(styles.item, {
                              [styles.disabled]: item.disabled,
                              [styles.danger]: item.danger,
                           })}
                           onClick={handleItemClick(item)}
                        >
                           {item.icon && (
                              <span className={styles.icon}>{item.icon}</span>
                           )}
                           <span className={styles.label}>{item.label}</span>
                        </li>
                     );
                  })}
               </ul>
            </div>
         </Portal>
      </>
   );
});

Dropdown.displayName = 'Dropdown';
