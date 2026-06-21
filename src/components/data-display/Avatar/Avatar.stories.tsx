import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';

const meta = {
   title: 'Components/Data Display/Avatar',
   component: Avatar,
   tags: ['autodocs'],
   argTypes: {
      src: {
         control: 'text',
      },
      alt: {
         control: 'text',
      },
      size: {
         control: 'select',
         options: ['sm', 'md', 'lg'],
      },
      initials: {
         control: 'text',
      },
   },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
   args: {
      alt: 'cat',
      src: 'https://plus.unsplash.com/premium_vector-1721649515677-2b8870358071?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   },
};

export const FixedSize: Story = {
   args: {
      size: 100,
      alt: 'cat',
      src: 'https://plus.unsplash.com/premium_vector-1758974122276-e2cbd0b21da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHxjYXR8ZW58MHx8MHx8fDA%3D',
   },
};

export const Large: Story = {
   args: {
      size: 'lg',
      alt: 'cat',
      src: 'https://images.unsplash.com/vector-1770724922075-4f21c7f038f0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   },
};

export const Small: Story = {
   args: {
      size: 'sm',
      alt: 'cat',
      src: 'https://images.unsplash.com/vector-1770724922075-4f21c7f038f0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   },
};
