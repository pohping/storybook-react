import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { useImageLoaded } from '@/hooks';
import type { AvatarProps } from './Avatar.types';
import styles from './Avatar.module.scss';
import { getInitials } from './utils/get-initials';

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
   const { src, alt, size = 'md', initials, className, style, ...rest } = props;
   const status = useImageLoaded(src);

   const isPredefinedSize = ['sm', 'md', 'lg'].includes(size as string);
   const showImage = src && status === 'loaded';
   const showFallback = !src || status === 'error';

   // Dynamic style for custom sizes
   const customSizeStyle = !isPredefinedSize
      ? { '--avatar-size': typeof size === 'number' ? `${size}px` : size }
      : {};

   return (
      <div
         ref={ref}
         className={clsx(
            styles.avatar,
            isPredefinedSize && styles[size as string],
            className,
         )}
         style={{ ...customSizeStyle, ...style } as React.CSSProperties}
         {...rest}
      >
         {showImage && (
            <img className={styles.image} src={src} alt={alt} loading="lazy" />
         )}

         {showFallback && (
            <div
               className={styles.fallback}
               role="img"
               aria-label={alt || 'Avatar'}
            >
               {initials || getInitials(alt)}
            </div>
         )}
      </div>
   );
});

Avatar.displayName = 'Avatar';
