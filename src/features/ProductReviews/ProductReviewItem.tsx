import type { FC } from 'react';
import { Avatar, Icon, Text } from '@/components/data-display';
import { Divider, Flex } from '@/components/layout';
import { Rating } from '@/components/inputs';
import { Button } from '@/components/general';
import { useAddVoteMutation } from '@/services/review-vote-api';
import { formatDate } from '@/utils';
import type { ProductReviewItemProps } from './ProductReviews.types';

export const ProductReviewItem: FC<ProductReviewItemProps> = (props) => {
   const { review, showDivider } = props;

   const [addVote] = useAddVoteMutation();

   const handleUpvote = () => {
      addVote({ review, value: 'up' });
   };

   const handleDownvote = () => {
      addVote({ review, value: 'down' });
   };

   return (
      <div>
         {showDivider && <Divider className="mb-3" />}
         <Flex gap={3} align="center">
            <Avatar src={review.user.avatar?.url} size="sm" />
            <div>
               <Text>{review.user.name}</Text>
               <Rating value={review.rating} readOnly />
            </div>
         </Flex>
         <Text className="mt-2">{review.comment}</Text>
         <Flex align="center" justify="space-between" className="mt-2">
            <Flex align="center" gap={2}>
               <Button
                  variant="link"
                  icon={<Icon name="Like" />}
                  onClick={handleUpvote}
               >
                  {review.votes.up.toString()}
               </Button>
               <Button
                  variant="link"
                  icon={<Icon name="Dislike" />}
                  onClick={handleDownvote}
               >
                  {review.votes.down.toString()}
               </Button>
            </Flex>
            <Text variant="small">{formatDate(review.createdAt)}</Text>
         </Flex>
      </div>
   );
};
