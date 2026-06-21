import React, { forwardRef } from 'react';
import type { ProgressProps } from './Progress.types';
import styles from './Progress.module.scss';
import clsx from 'clsx';

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
   (props, ref) => {
      const {
         value = 0,
         max = 100,
         size = 'md',
         variant = 'default',
         label,
         showValue = false,
         color,
         className,
         style,
         ...rest
      } = props;
      const formatter = new Intl.NumberFormat('en-US', {
         style: 'percent',
         minimumFractionDigits: 0,
      });

      const percent = Math.min(100, Math.max(0, (value / max) * 100));
      const formattedPercent = formatter.format(percent / 100);
      const valueLabel = showValue ? formattedPercent : label;

      const rootStyle = {
         '--progress-indicator-percent': formattedPercent,
         '--progress-indicator-color': color,
         ...style,
      } as React.CSSProperties;

      return (
         <div
            ref={ref}
            className={clsx(
               styles.progress,
               styles[size],
               styles[variant],
               className,
            )}
            style={rootStyle}
            {...rest}
         >
            <div className={styles.track}>
               <div
                  className={styles.indicator}
                  role="progressbar"
                  aria-valuenow={Math.round(percent)}
                  aria-valuemin={0}
                  aria-valuemax={100}
               />
            </div>

            {valueLabel && <div className={styles.label}>{valueLabel}</div>}
         </div>
      );
   },
);

Progress.displayName = 'Progress';
