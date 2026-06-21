import type { CSSVars, GridItemProps } from './Grid.types';
import styles from './Grid.module.scss';
import clsx from 'clsx';

export const GridItem: React.FC<GridItemProps> = ({
   span,
   style,
   className,
   ...rest
}) => {
   const cssVars: CSSVars = { ...style };
   const classNames = [];

   if (typeof span === 'number') {
      cssVars['--grid-span'] = span;
      classNames.push(styles.itemSpan);
   } else if (span && typeof span === 'object') {
      Object.entries(span).forEach(([bp, value]) => {
         cssVars[`--grid-span-${bp}`] = value;
         classNames.push(styles[`itemSpan-${bp}`]);
      });
   }

   return (
      <div className={clsx(classNames, className)} style={cssVars} {...rest} />
   );
};
