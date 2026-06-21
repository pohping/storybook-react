import React, { forwardRef } from 'react';
import clsx from 'clsx';
import type { BadgeProps } from './Badge.types';
import styles from './Badge.module.scss';

export const Badge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
   const {
      children,
      count,
      text,
      dot = false,
      maxCount = 99,
      variant = 'primary',
      offset,
      className,
      style,
      ...rest
   } = props;

   const hasCount = count !== undefined && count !== null;
   const hasText = Boolean(text);
   const isVisible = dot || hasCount || hasText;
   const displayCount = hasCount && count > maxCount ? `${maxCount}+` : count;

   const badgeStyle = {
      ...(offset?.[0] !== undefined && { top: offset[0] }),
      ...(offset?.[1] !== undefined && { right: offset[1] }),
      ...style,
   } as React.CSSProperties;

   return (
      <div
         ref={ref}
         className={clsx(styles.badge, styles[variant], className)}
         {...rest}
      >
         {children}

         {isVisible && (
            <span
               className={clsx(styles.item, {
                  [styles.dot]: dot,
                  [styles.count]: hasCount && !dot,
                  [styles.text]: hasText && !hasCount && !dot,
               })}
               style={badgeStyle}
               aria-hidden={!isVisible}
            >
               {!dot && (hasCount ? displayCount : text)}
            </span>
         )}
      </div>
   );
});

Badge.displayName = 'Badge';
