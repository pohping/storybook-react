import type { Product } from '@/types/models';
import type { LinkProps } from 'react-router-dom';

export interface ProductCardProps extends LinkProps {
   product: Product;
}
