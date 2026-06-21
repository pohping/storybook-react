import { forwardRef } from 'react';
import clsx from 'clsx';
import { toCssUnit } from '@/utils';
import { GridItem } from './GridItem';
import type { CSSVars, GridComponent, GridProps, GridRef } from './Grid.types';
import styles from './Grid.module.scss';

export const Grid = forwardRef<GridRef, GridProps>((props, ref) => {
   const {
      columns,
      minChildWidth,
      gap = 1,
      rowGap,
      columnGap,
      className,
      alignItems,
      justifyItems,
      children,
      style,
      ...rest
   } = props;
   const cssVars: CSSVars = {
      ...(gap !== undefined && { '--grid-gap': `var(--space-${gap})` }),
      ...(rowGap !== undefined && {
         '--grid-row-gap': `var(--space-${rowGap})`,
      }),
      ...(columnGap !== undefined && {
         '--grid-column-gap': `var(--space-${columnGap})`,
      }),
      ...(alignItems !== undefined && { '--grid-align-items': alignItems }),
      ...(justifyItems !== undefined && {
         '--grid-justify-items': justifyItems,
      }),
      ...style,
   };

   const classNames = [styles.grid];

   // minChildWidth has priority
   if (minChildWidth) {
      cssVars['--grid-min-child-width'] = toCssUnit(minChildWidth);
      classNames.push(styles.autoFit);
   } else if (typeof columns === 'number') {
      cssVars['--grid-columns'] = columns;
      classNames.push(styles.columns);
   } else if (columns && typeof columns === 'object') {
      Object.entries(columns).forEach(([bp, value]) => {
         cssVars[`--grid-columns-${bp}`] = value;
         classNames.push(styles[`columns-${bp}`]);
      });
   }

   return (
      <div
         ref={ref}
         className={clsx(classNames, className)}
         style={cssVars}
         {...rest}
      >
         {children}
      </div>
   );
}) as GridComponent;

Grid.Item = GridItem;
Grid.displayName = 'Grid';
