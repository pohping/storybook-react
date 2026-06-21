import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './Progress';

const meta = {
   title: 'Components/Feedback/Progress',
   component: Progress,
   tags: ['autodocs'],
   argTypes: {
      value: {
         control: 'number',
      },
      max: {
         control: 'number',
      },
      size: {
         control: 'radio',
         options: ['sm', 'md', 'lg'],
      },
      variant: {
         control: 'select',
         options: ['default', 'striped', 'gradient'],
      },
      label: {
         control: 'text',
      },
      showValue: {
         control: 'boolean',
      },
      color: {
         control: 'color',
      },
   },
} satisfies Meta<typeof Progress>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { value: 8, max: 10 } };

export const Striped: Story = {
   args: { value: 8, max: 10, variant: 'gradient' },
};

export const Gradient: Story = {
   args: { value: 8, max: 10, variant: 'striped' },
};

export const Small: Story = {
   args: { value: 5, max: 10, size: 'sm' },
};

export const Large: Story = {
   args: { value: 5, max: 10, size: 'lg' },
};

export const WithLabel: Story = {
   args: { value: 8, max: 10, label: 8 },
};
