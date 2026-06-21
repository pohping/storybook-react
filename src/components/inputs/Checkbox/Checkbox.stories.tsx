import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
   title: 'Components/Inputs/Checkbox',
   component: Checkbox,
   tags: ['autodocs'],
   argTypes: {
      size: {
         control: 'select',
         options: ['sm', 'md', 'lg'],
      },
      label: {
         control: 'text',
      },
      disabled: { control: 'boolean' },
   },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
   args: {
      label: 'Accept terms and conditions',
      size: 'md',
   },
};

export const Small: Story = {
   args: {
      label: 'Small Checkbox',
      size: 'sm',
   },
};

export const Large: Story = {
   args: {
      label: 'Large Checkbox',
      size: 'lg',
   },
};

export const DefaultChecked: Story = {
   args: {
      label: 'Checked by default',
      defaultChecked: true,
   },
};

export const Disabled: Story = {
   args: {
      label: 'Disabled state',
      disabled: true,
   },
};

export const DisabledChecked: Story = {
   args: {
      label: 'Disabled & Checked',
      disabled: true,
      defaultChecked: true,
   },
};
