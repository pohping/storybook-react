import { useState, type FC } from 'react';
import { useGetReviewsByProductIdQuery } from '@/services/review-api';
import type { ProductReviewsProps } from './ProductReviews.types';
import { Flex, Grid } from '@/components/layout';
import { Text } from '@/components/data-display';
import { Rating, Select, type SelectProps } from '@/components/inputs';
import { Button } from '@/components/general';
import { useJsonApiParams } from '@/hooks';
import type { Review } from '@/types/models';
import { Loader, Progress } from '@/components/feedback';
import { ProductReviewItem } from './ProductReviewItem';
import { Pagination } from '@/components/navigation';

export const ProductReviews: FC<ProductReviewsProps> = (props) => {
   const { productId } = props;
   const [searchParams, setSearchParams] = useState<Record<string, string>>({});
   const [params] = useJsonApiParams<Review>({
      sort: ['-createdAt'],
      include: ['user.avatar'],
   });
   const { data: reviews, isLoading } = useGetReviewsByProductIdQuery({
      productId,
      params,
   });

   const handleRatingFilter = (rating: number) => () => {
      setSearchParams((prev) => ({ ...prev, rating: rating.toString() }));
   };

   const handleSortChange: SelectProps['onValueChange'] = (value) => {
      setSearchParams((prev) => ({ ...prev, sort: value }));
   };

   if (isLoading) return <Loader variant="page" />;

   if (!reviews?.data || !reviews.meta) return 'no review';

   return (
      <div>
         <Grid columns={{ sm: 1, md: 3 }} alignItems="center">
            <Grid.Item span={1}>
               <Flex gap={3}>
                  <Text variant="h2">{reviews.meta.averageRating}/5</Text>
                  <Rating
                     value={reviews.meta.averageRating}
                     size="lg"
                     readOnly
                  />
               </Flex>
               <Text>Based on {reviews.meta.ratingCount} reviews</Text>
            </Grid.Item>
            <Grid.Item span={2}>
               <Flex direction="column">
                  {Array.from({ length: 5 })
                     .map((_, idx) => idx + 1)
                     .reverse()
                     .map((rating) => (
                        <Button
                           key={rating}
                           fullWidth
                           variant="link"
                           onClick={handleRatingFilter(rating)}
                        >
                           <Flex align="center" gap={3}>
                              <Text style={{ whiteSpace: 'nowrap' }}>
                                 {rating} star
                              </Text>
                              <Progress
                                 style={{ flex: 1 }}
                                 value={
                                    (reviews.meta!.rates[
                                       rating as keyof typeof reviews.meta.rates
                                    ] /
                                       reviews.meta!.ratingCount) *
                                    100
                                 }
                                 label={
                                    reviews.meta!.rates[
                                       rating as keyof typeof reviews.meta.rates
                                    ]
                                 }
                              />
                           </Flex>
                        </Button>
                     ))}
               </Flex>
            </Grid.Item>
         </Grid>
         <Flex justify="flex-end">
            <Select
               className="mt-2"
               placeholder="Sort"
               onValueChange={handleSortChange}
               value={searchParams['sort']}
               options={[
                  { value: '-createdAt', label: 'Latest' },
                  { value: 'createdAt', label: 'Oldest' },
               ]}
            />
         </Flex>
         <Flex className="mt-2" direction="column" gap={4}>
            {reviews.data.map((review, idx) => (
               <ProductReviewItem
                  key={review.id}
                  review={review}
                  showDivider={idx !== 0}
               />
            ))}
         </Flex>
         <Pagination
            className="mt-3"
            totalPages={reviews.meta.pagination.totalPage}
            page={reviews.meta.pagination.currentPage}
            onPageChange={() => {}}
         />
      </div>
   );
};
