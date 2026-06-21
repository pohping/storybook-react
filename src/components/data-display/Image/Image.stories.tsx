import type { Meta, StoryObj } from '@storybook/react-vite';
import { Image } from './Image';

const meta = {
   title: 'Components/Data Display/Image',
   component: Image,
   tags: ['autodocs'],
   argTypes: {
      src: {
         control: 'text',
      },
      fit: {
         control: 'select',
         options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
      },
      width: {
         control: 'text',
      },
      height: {
         control: 'text',
      },
      aspectRatio: {
         control: 'text',
      },
      fallback: {
         control: 'object',
      },
      placeholder: {
         control: 'radio',
         options: ['shimmer', 'blur', 'none'],
      },
   },
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
   args: {
      src: 'https://plus.unsplash.com/premium_vector-1732820665266-117c6317cb0f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      width: 500,
   },
};

export const WithAspectRatio: Story = {
   args: {
      src: 'https://plus.unsplash.com/premium_vector-1730985779029-29db7e4ef3eb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Keyboard',
      width: 300,
      aspectRatio: '1/1',
      fit: 'cover',
   },
};

export const LoadingState: Story = {
   args: {
      src: 'https://tools-httpstatus.pickup-services.com/200?sleep=5000', // Slow loading image
      alt: 'Simulating slow load',
      width: 400,
      height: 225,
      placeholder: 'shimmer',
   },
};

export const ErrorState: Story = {
   args: {
      src: 'http://image-not-found/',
      alt: 'Broken image link',
      width: 400,
      height: 225,
      placeholder: 'shimmer',
   },
};

// export const Fill: Story = {};

// export const Contain: Story = {};

// export const Cover: Story = {};

// export const None: Story = {};

// export const ScaleDown: Story = {};
