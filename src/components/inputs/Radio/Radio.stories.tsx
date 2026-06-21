import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './Radio';
import { useState } from 'react';
import type { RadioValue } from './Radio.types';

const meta = {
   component: Radio,
   title: 'Components/Inputs/Radio',
   tags: ['autodocs'],
   argTypes: {
      size: {
         control: 'radio',
         options: ['sm', 'md', 'lg'],
      },
      label: { control: 'text' },
   },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: 'Radio' } };

export const Small: Story = { args: { label: 'Small', size: 'sm' } };

export const Large: Story = { args: { label: 'Large', size: 'lg' } };

export const DefaultValue: Story = {
   render: (args) => {
      return (
         <Radio.Group name="fruit" defaultValue="orange">
            <Radio {...args} value="apple" label="Apple" />
            <Radio {...args} value="banana" label="Banana" />
            <Radio {...args} value="orange" label="Orange" />
         </Radio.Group>
      );
   },
};

export const Controlled: Story = {
   render: (args) => {
      const [value, setValue] = useState<RadioValue>('ios');

      return (
         <Radio.Group name="os" value={value} onChange={setValue}>
            <Radio {...args} value="android" label="Android" />
            <Radio {...args} value="ios" label="IOS" />
            <Radio {...args} value="windows" label="Windows" />
         </Radio.Group>
      );
   },
};

export const Disabled: Story = { args: { label: 'Disabled', disabled: true } };
