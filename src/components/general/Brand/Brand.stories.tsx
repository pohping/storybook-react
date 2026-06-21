import type { Meta, StoryObj } from '@storybook/react-vite';
import { Brand } from './Brand';

const meta = {
   title: 'Components/General/Brand',
   component: Brand,
   tags: ['autodocs'],
} satisfies Meta<typeof Brand>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { to: '#' } };
