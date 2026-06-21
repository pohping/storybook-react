import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProductDetail } from './ProductDetail';
import { productHandlers, reviewHandlers } from '@/mocks/handlers';
import { MainLayout } from '@/features';

const meta = {
   title: 'Pages/ProductDetail',
   component: ProductDetail,
   parameters: {
      msw: {
         handlers: [...productHandlers, ...reviewHandlers],
      },
   },
   decorators: (Story) => (
      <MainLayout>
         <Story />
      </MainLayout>
   ),
} satisfies Meta<typeof ProductDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
