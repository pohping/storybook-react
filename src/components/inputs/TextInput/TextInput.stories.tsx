import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextInput } from './TextInput';

const meta = {
   component: TextInput,
   title: 'Components/Inputs/TextInput',
   tags: ['autodocs'],
   argTypes: {
      size: {
         control: 'radio',
         options: ['sm', 'md', 'lg'],
      },
      error: {
         control: 'boolean',
      },
   },
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { placeholder: 'Enter something...' } };

export const Small: Story = {
   args: { placeholder: 'Enter someting...', size: 'sm' },
};

export const Large: Story = {
   args: { placeholder: 'Enter someting...', size: 'lg' },
};

export const Error: Story = {
   args: { placeholder: 'Enter someting...', error: true },
};

export const Disabled: Story = {
   args: { placeholder: 'Enter someting...', disabled: true },
};
