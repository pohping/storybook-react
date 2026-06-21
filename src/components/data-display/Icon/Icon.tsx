import React, { forwardRef, useMemo } from 'react';
import clsx from 'clsx';
import { icons } from './icons';
import type { IconProps } from './Icon.types';
import styles from './Icon.module.scss';

export const Icon = forwardRef<HTMLElement, IconProps>((props, ref) => {
   const {
      name,
      size,
      color,
      spin,
      title,
      className,
      style,
      as: Component = 'span',
      ...rest
   } = props;

   const SvgIcon = useMemo(() => icons[name], [name]);

   if (!SvgIcon) {
      console.error(`Icon "${name}" does not exist in the icon library.`);
      return null;
   }

   const isTokenSize =
      typeof size === 'string' && ['xs', 'sm', 'md', 'lg', 'xl'].includes(size);

   const customStyle = {
      ...(color && { '--icon-color': color }),
      ...(!isTokenSize && {
         '--icon-ize': typeof size === 'number' ? `${size}px` : size,
      }),
      ...style,
   } as React.CSSProperties;

   return (
      <Component
         ref={ref}
         className={clsx(
            styles.icon,
            {
               [styles[size as string]]: isTokenSize,
               [styles.spin]: spin,
            },
            className,
         )}
         style={customStyle}
         // Accessibility Logic:
         role={title ? 'img' : 'presentation'}
         aria-label={title}
         aria-hidden={!title}
         {...rest}
      >
         {/* If title exists, we inject it for SVGR to potentially pick up or standard SVG logic */}
         <SvgIcon aria-hidden="true" />
      </Component>
   );
});

Icon.displayName = 'Icon';
