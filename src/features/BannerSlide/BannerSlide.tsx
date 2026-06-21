import { useNavigate } from 'react-router-dom';
import { Image, Text } from '@/components/data-display';
import { Button } from '@/components/general';
import styles from './BannerSlide.module.scss';
import clsx from 'clsx';
import type { BannerSlideProps } from './Banner.types';

export const BannerSlide = (props: BannerSlideProps) => {
   const {
      banner: { image, url, title, description },
      index = 0,
   } = props;
   const navigate = useNavigate();

   const positions = ['left', 'center', 'right'];

   const handleButtonClick = () => {
      navigate(url);
   };

   return (
      <div className={clsx(styles.bannerSlide, styles[positions[index % 3]])}>
         <div className={styles.content}>
            <Text className={styles.title} variant="h1">
               {title}
            </Text>
            <Text className={styles.description} variant="body">
               {description}
            </Text>
            <Button
               size="lg"
               className={styles.ctaButton}
               onClick={handleButtonClick}
            >
               Shop Now
            </Button>
         </div>
         <div className={styles.imageContainer}>
            <Image
               className={styles.image}
               height="100%"
               src={image.url}
               fit="cover"
            />
         </div>
      </div>
   );
};
