import type { Meta, StoryObj } from '@storybook/react-vite';
import { DatePicker } from './DatePicker';

const meta = {
   component: DatePicker,
   title: 'Components/Inputs/DatePicker',
   tags: ['autodocs'],
   argTypes: {
      value: {
         control: 'text',
      },
      size: {
         control: 'radio',
         options: ['sm', 'md', 'lg'],
      },
      disabled: {
         control: 'boolean',
      },
      error: {
         control: 'boolean',
      },
   },
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = { args: { size: 'sm' } };

export const Large: Story = { args: { size: 'lg' } };

export const Controlled: Story = {
   args: {
      value: new Date(2025, 6, 15).toISOString(),
   },
};

export const Disabled: Story = {
   args: { disabled: true },
};
