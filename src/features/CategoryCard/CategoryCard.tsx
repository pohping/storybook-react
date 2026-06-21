import type { FC } from 'react';
import type { CategoryCardProps } from './CategoryCard.types';
import { Link } from 'react-router-dom';
import { Card } from '@/components/data-display';

export const CategoryCard: FC<CategoryCardProps> = (props) => {
   const { to, category } = props;

   return (
      <Link to={to}>
         <Card key={category.id} variant="ghost" padded={false}>
            <Card.Cover src={category.thumbnail?.url} />
            <Card.Content textAlign="center">{category.name}</Card.Content>
         </Card>
      </Link>
   );
};
