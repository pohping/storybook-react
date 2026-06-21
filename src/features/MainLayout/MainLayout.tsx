import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './MainLayout.module.scss';
import clsx from 'clsx';
import type { FC } from 'react';
import type { MainLayoutProps } from './MainLayout.types';

export const MainLayout: FC<MainLayoutProps> = (props) => {
   const { children } = props;
   const { pathname } = useLocation();

   const noTopMarginRoutes = ['/', '/landing']; // paths without margin
   const noTopMargin = noTopMarginRoutes.includes(pathname);

   return (
      <div className={clsx(styles.appWrapper, { topPadded: !noTopMargin })}>
         <Header />
         <main className={styles.main}>{children ?? <Outlet />}</main>
         <Footer />
      </div>
   );
};
