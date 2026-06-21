import type { Category } from '@/types/models';
import type { LinkProps } from 'react-router-dom';

export interface CategoryCardProps extends LinkProps {
   category: Category;
}
