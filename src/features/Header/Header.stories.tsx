import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from './Header';
import { productHandlers } from '@/mocks/handlers';

const meta = {
   title: 'Features/Header',
   component: Header,
   parameters: {
      msw: {
         handlers: [...productHandlers],
      },
   },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
