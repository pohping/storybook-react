import { Container, Divider } from '@/components/layout';
import styles from './Footer.module.scss';
import { Icon, Text } from '@/components/data-display';
import { Button } from '@/components/general';
import { TextInput } from '@/components/inputs';
import type { FC } from 'react';
import type { FooterProps } from './Footer.types';
import clsx from 'clsx';

export const Footer: FC<FooterProps> = (props) => {
   const { className, ...rest } = props;

   return (
      <footer className={clsx(styles.footer, className)} {...rest}>
         <Container className={styles.inner}>
            <div className={styles.content}>
               <div className={styles.group}>
                  <Text variant="h4">Quick Links</Text>
                  <div className={styles.links}>
                     <Button variant="link">Home</Button>
                     <Button variant="link">Products</Button>
                     <Button variant="link">About Us</Button>
                  </div>
               </div>
               <div className={styles.group}>
                  <Text variant="h4">Helper</Text>
                  <div className={styles.links}>
                     <Button variant="link">Contact Us</Button>
                     <Button variant="link">FAQ</Button>
                     <Button variant="link">Privacy Policy</Button>
                  </div>
               </div>
               <div className={styles.group}>
                  <Text variant="h4">Get notified by email</Text>
                  <div className={styles.mail}>
                     <TextInput placeholder="Enter your email address" />
                     <Button>Submit</Button>
                  </div>
                  <Text className="mt-2">
                     Get the latest promotion to your inbox every month.
                  </Text>
               </div>
            </div>
         </Container>
         <Divider />
         <Container>
            <div className={styles.copyright}>
               <Text>{`©${new Date().getFullYear()} PC Hardware, All right reserved.`}</Text>
               <div className={styles.social}>
                  <Button icon={<Icon name="Facebook" />} variant="text" />
                  <Button icon={<Icon name="Youtube" />} variant="text" />
                  <Button icon={<Icon name="Instagram" />} variant="text" />
               </div>
            </div>
         </Container>
      </footer>
   );
};
