import type { Meta, StoryObj } from '@storybook/react-vite';
import { NumberInput } from './NumberInput';
import { useState } from 'react';

const meta = {
   component: NumberInput,
   title: 'Components/Inputs/NumberInput',
   tags: ['autodocs'],
   argTypes: {
      size: {
         control: { type: 'radio', options: ['sm', 'md', 'lg'] },
      },
      min: { control: 'number' },
      max: { control: 'number' },
      step: { control: 'number' },
      disabled: { control: 'boolean' },
      placeholder: { control: 'text' },
   },
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = { args: { size: 'sm' } };

export const Large: Story = { args: { size: 'lg' } };

export const Range: Story = { args: { min: 1, max: 10 } };

export const Step: Story = { args: { step: 3 } };

export const Controlled: Story = {
   render: (args) => {
      const [value, setValue] = useState<null | number>(5);

      return (
         <NumberInput
            {...args}
            onChange={(v) => {
               console.log({ v });
               setValue(v);
            }}
            value={value}
         />
      );
   },
};

export const Error: Story = { args: { error: true } };

export const Disabled: Story = { args: { disabled: true } };
