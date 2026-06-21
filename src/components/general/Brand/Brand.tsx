import { Icon } from '@/components/data-display';
import styles from './Brand.module.scss';
import { Link } from 'react-router-dom';
import type { FC } from 'react';
import type { BrandProps } from './Brand.types';
import clsx from 'clsx';

export const Brand: FC<BrandProps> = (props) => {
   const { className, ...rest } = props;

   return (
      <Link className={clsx(styles.brandWrapper, className)} {...rest}>
         <h1 className={styles.brand}>
            <Icon className={styles.logo} name="Piano" />
            <span className={styles.text}>ClassicKeys</span>
         </h1>
      </Link>
   );
};
