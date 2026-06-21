import type { Meta, StoryObj } from '@storybook/react-vite';
import { Rating } from './Rating';
import { useState } from 'react';

const meta = {
   component: Rating,
   title: 'Components/Inputs/Rating',
   tags: ['autodocs'],
   argTypes: {
      value: {
         control: 'number',
      },
      defaultValue: {
         control: 'number',
      },
      count: {
         control: 'number',
      },
      allowHalf: {
         control: 'boolean',
      },
      readOnly: { control: 'boolean' },
      size: { control: 'radio', options: ['sm', 'lg', 'lg'] },
   },
} satisfies Meta<typeof Rating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { defaultValue: 3 } };

export const Small: Story = { args: { size: 'sm', defaultValue: 3 } };

export const Large: Story = { args: { size: 'lg', defaultValue: 3 } };

export const WithLabel: Story = { args: { label: 50, value: 3.4 } };

export const Controlled: Story = {
   render: (args) => {
      const [value, setValue] = useState(3);

      return <Rating value={value} onChange={(v) => setValue(v)} {...args} />;
   },
};

export const ReadOnly: Story = { args: { readOnly: true, value: 3 } };
