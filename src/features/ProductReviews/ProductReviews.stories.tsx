import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProductReviews } from './ProductReviews';
import { reviewHandlers } from '@/mocks/handlers';

const meta = {
   title: 'Features/ProductReviews',
   component: ProductReviews,
   parameters: {
      msw: {
         handlers: [...reviewHandlers],
      },
   },
} satisfies Meta<typeof ProductReviews>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
   args: {
      productId: 'prod-1',
   },
};
