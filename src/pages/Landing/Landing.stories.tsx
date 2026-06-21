import { Landing } from './Landing';
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
   bannerHandlers,
   categoryHandlers,
   productHandlers,
} from '@/mocks/handlers';
import { MainLayout } from '@/features';

const meta = {
   title: 'Pages/Landing',
   component: Landing,
   parameters: {
      msw: {
         handlers: [...bannerHandlers, ...categoryHandlers, ...productHandlers],
      },
   },
   decorators: (Story) => (
      <MainLayout>
         <Story />
      </MainLayout>
   ),
} satisfies Meta<typeof Landing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
