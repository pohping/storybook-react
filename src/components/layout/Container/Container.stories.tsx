import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from './Container';

const meta = {
   title: 'Components/Layout/Container',
   component: Container,
   tags: ['autodocs'],
   argTypes: { fluid: { control: 'boolean' } },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
   args: {
      children:
         'This is a container. Resize the viewport to see max-width updates',
      fluid: false,
      style: { background: '#f0f0f0', padding: '10px' },
   },
};
