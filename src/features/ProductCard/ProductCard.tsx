import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { Card, Text } from '@/components/data-display';
import { Rating } from '@/components/inputs';
import { formatPrice } from '@/utils';
import { Badge } from '@/components/data-display/Badge';
import type { ProductCardProps } from './ProductCard.types';
import styles from './ProductCard.module.scss';

export const ProductCard: FC<ProductCardProps> = (props) => {
   const {
      product: {
         price,
         name,
         overallRating,
         totalReviews,
         thumbnail,
         discount,
      },
      to,
   } = props;
   const discountedPrice = (price * (100 - (discount?.value ?? 0))) / 100;
   const discountBadgeText = discount?.value ? `${discount.value}%` : undefined;

   return (
      <Link to={to}>
         <Badge text={discountBadgeText} className={styles.discountBadge}>
            <Card className={styles.card}>
               <Card.Cover src={thumbnail?.url} />
               <Card.Content className={styles.content}>
                  <Text variant="h6" truncate={2}>
                     {name}
                  </Text>
                  <Rating
                     value={overallRating}
                     count={5}
                     className={styles.rating}
                     size="sm"
                     label={totalReviews}
                     readOnly
                  />
                  <Text variant="h4" className={styles.price}>
                     {formatPrice(discount ? discountedPrice : price)}
                  </Text>
               </Card.Content>
            </Card>
         </Badge>
      </Link>
   );
};
