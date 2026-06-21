import { forwardRef } from 'react';
import clsx from 'clsx';
import type { CardCoverProps } from './Card.types';
import styles from './Card.module.scss';

export const CardCover = forwardRef<HTMLDivElement, CardCoverProps>(
   (props, ref) => {
      const {
         src,
         fit = 'cover',
         aspectRatio = 1,
         style,
         className,
         ...rest
      } = props;

      return (
         <div
            ref={ref}
            className={clsx(styles.cover, className)}
            style={
               {
                  backgroundImage: src ? `url(${src})` : undefined,
                  '--card-cover-fit': fit,
                  '--card-cover-aspect': aspectRatio,
                  ...style,
               } as React.CSSProperties
            }
            {...rest}
         />
      );
   },
);

CardCover.displayName = 'Card.Cover';
