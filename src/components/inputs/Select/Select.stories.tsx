import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const meta = {
   component: Select,
   title: 'Components/Inputs/Select',
   tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
   { value: 'option_1', label: 'Option 1' },
   { value: 'option_2', label: 'Option 2' },
   { value: 'option_3', label: 'Option 3' },
   { value: 'option_4', label: 'Option 4' },
   { value: 'option_5', label: 'Option 5' },
   { value: 'option_6', label: 'Option 6' },
   { value: 'option_7', label: 'Option 7' },
   { value: 'option_8', label: 'Option 8' },
   { value: 'option_9', label: 'Option 9' },
];

export const Default: Story = {
   args: {
      options,
   },
};

export const Small: Story = {
   args: {
      options,
      size: 'sm',
   },
};

export const Large: Story = {
   args: {
      options,
      size: 'lg',
   },
};

export const WithDefaultValue: Story = {
   args: { options, defaultValue: 'option_7' },
};

export const Searchable: Story = {
   args: {
      options,
      onSearch: (value) => console.log(value),
      searchable: true,
   },
};

export const ErrorState: Story = {
   args: {
      options,
      error: true,
   },
};
