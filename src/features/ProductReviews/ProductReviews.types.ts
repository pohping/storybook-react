import type { Review } from '@/types/models';
import type { ComponentPropsWithoutRef } from 'react';

export interface ProductReviewsProps extends ComponentPropsWithoutRef<'div'> {
   productId: string;
}

export interface ProductReviewItemProps {
   review: Review;
   showDivider?: boolean;
}
