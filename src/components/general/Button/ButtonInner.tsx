import { Fragment } from 'react';
import type { ButtonInnerProps } from './Button.types';
import styles from './Button.module.scss';
import { Icon } from '@/components/data-display';

export const ButtonInner = ({
   loading,
   icon,
   iconPosition,
   children,
}: ButtonInnerProps) => {
   const finalIcon = loading ? (
      <span className={styles.iconWrapper}>
         <Icon name="Loading" className={styles.spinner} />
      </span>
   ) : icon ? (
      <span className={styles.iconWrapper}>{icon}</span>
   ) : null;

   // Icon-only button
   if (!children && finalIcon) return finalIcon;

   return (
      <Fragment>
         {iconPosition === 'start' && finalIcon}
         {children && <span className={styles.label}>{children}</span>}
         {iconPosition === 'end' && finalIcon}
      </Fragment>
   );
};
