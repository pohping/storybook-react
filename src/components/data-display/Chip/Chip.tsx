import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import type { ChipProps } from './Chip.types';
import styles from './Chip.module.scss';

export const Chip = forwardRef<HTMLDivElement, ChipProps>((props, ref) => {
   const {
      label,
      variant = 'filled',
      size = 'md',
      icon,
      onDelete,
      clickable,
      className,
      onClick,
      ...rest
   } = props;

   const isClickable = clickable || !!onClick;

   const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation(); // Prevent triggering onClick of the chip itself
      onDelete?.(e);
   };

   return (
      <div
         ref={ref}
         className={clsx(
            styles.chip,
            styles[variant],
            styles[size],
            { [styles.clickable]: isClickable },
            className,
         )}
         onClick={onClick}
         role={isClickable ? 'button' : undefined}
         tabIndex={isClickable ? 0 : undefined}
         {...rest}
      >
         {icon && <span className={styles.icon}>{icon}</span>}

         <span className={styles.label}>{label}</span>

         {onDelete && (
            <button
               type="button"
               className={styles.deleteButton}
               onClick={handleDelete}
               aria-label={`Remove ${label}`}
            >
               <Icon name="Cross" size={size === 'sm' ? 12 : 14} />
            </button>
         )}
      </div>
   );
});

Chip.displayName = 'Chip';
