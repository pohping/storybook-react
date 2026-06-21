import { forwardRef, type MouseEvent } from 'react';
import { ButtonInner } from './ButtonInner';
import type { ButtonProps, ButtonRef } from './Button.types';
import styles from './Button.module.scss';
import clsx from 'clsx';

export const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
   const {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      disabled,
      loading,
      className,
      icon,
      iconPosition = 'start',
      children,
      type = 'button',
      onClick,
      ...rest
   } = props;
   const isDisabled = disabled || loading;

   const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) return;

      onClick?.(event);
   };

   return (
      <button
         ref={ref}
         type={type}
         disabled={isDisabled}
         aria-disabled={isDisabled}
         aria-busy={loading || undefined}
         onClick={handleClick}
         className={clsx(
            styles.button,
            styles[size],
            styles[variant],
            {
               [styles.fluid]: fullWidth,
               [styles.iconOnly]: Boolean(icon && !children),
            },
            className,
         )}
         {...rest}
      >
         <ButtonInner icon={icon} loading={loading} iconPosition={iconPosition}>
            {children}
         </ButtonInner>
      </button>
   );
});

Button.displayName = 'Button';
