import { forwardRef, useMemo } from 'react';
import { useImageLoaded } from '@/hooks';
import { toCssUnit } from '@/utils';
import clsx from 'clsx';
import styles from './Image.module.scss';
import type { ImageProps, ImageRef } from './Image.types';

export const Image = forwardRef<ImageRef, ImageProps>((props, ref) => {
   const {
      src,
      alt = '',
      fit = 'cover',
      width,
      height,
      aspectRatio,
      placeholder = 'shimmer',
      fallback,
      style,
      className,
      loading = 'lazy',
      ...rest
   } = props;
   const status = useImageLoaded(src);

   const isLoaded = status === 'loaded';
   const isError = status === 'error' || !src;
   const isLoading = status === 'loading';

   // Memoize styles to prevent unnecessary object creation on every render
   const rootStyle = useMemo(() => {
      const vars: Record<string, string | number | undefined> = {
         ...style,
      };

      if (aspectRatio) vars['--image-aspect-ratio'] = aspectRatio;
      if (width) vars['--image-width'] = toCssUnit(width);
      if (height) vars['--image-height'] = toCssUnit(height);
      if (fit) vars['--image-fit'] = fit;

      return vars as React.CSSProperties;
   }, [style, aspectRatio, width, height, fit]);

   return (
      <div
         ref={ref}
         className={clsx(
            styles.image,
            {
               [styles.loaded]: isLoaded,
               [styles.hasAspectRatio]: aspectRatio,
            },
            className,
         )}
         style={rootStyle}
      >
         {/* 1. Placeholder / Shimmer  */}
         {isLoading && placeholder === 'shimmer' && (
            <div className={styles.placeholder} aria-hidden="true" />
         )}

         {/* 2. Actual Image */}
         {!isError && (
            <img
               src={src}
               alt={alt}
               className={styles.inner}
               loading={loading}
               {...rest}
            />
         )}

         {/* 3. Error / Fallback State */}
         {isError && (
            <div
               className={styles.fallback}
               role="img"
               aria-label={alt || 'Image failed to load'}
            >
               {alt || fallback}
            </div>
         )}
      </div>
   );
});

Image.displayName = 'Image';
