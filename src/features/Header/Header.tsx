import { Brand, Button } from '@/components/general';
import { Select } from '@/components/inputs';
import { Icon } from '@/components/data-display';
import { Container } from '@/components/layout/Container';
import { useGetProductsQuery } from '@/services/product-api';
import styles from './Header.module.scss';
import { Dropdown } from '@/components/navigation';

export const Header = () => {
   const { data: products } = useGetProductsQuery({});

   const searchOptions = products?.data.map((product) => ({
      label: product.name,
      value: product.id,
   }));

   const userMenu = [
      {
         label: 'View Profile',
         onClick: () => {},
      },
      {
         label: 'Account Settings',
         onClick: () => {},
      },
      {
         label: 'Sign Out',
         onClick: () => {},
      },
   ];

   return (
      <header className={styles.header}>
         <Container className={styles.inner}>
            <Brand to="/" />
            <Select
               placeholder="Search instruments"
               searchable
               fluid
               options={searchOptions}
            />
            <div className={styles.tool}>
               <Button variant="text" size="lg" icon={<Icon name="Cart" />} />

               <Dropdown menu={userMenu} trigger="hover" placement="bottom-end">
                  <Button
                     variant="text"
                     size="lg"
                     icon={<Icon name="User" />}
                  />
               </Dropdown>
            </div>
         </Container>
      </header>
   );
};
