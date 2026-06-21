import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from './Chip';
import { Icon } from '../Icon';

const meta = {
   title: 'Components/Data Display/Chip',
   component: Chip,
   tags: ['autodocs'],
   argTypes: {
      label: {
         control: 'text',
      },
      variant: {
         control: 'select',
         options: ['filled', 'outlined', 'ghost'],
      },
      size: {
         control: 'radio',
         options: ['sm', 'md'],
      },
      icon: {
         control: 'object',
      },
      clickable: {
         control: 'boolean',
      },
   },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
   args: {
      label: 'Example Chip',
   },
};

export const Outlined: Story = {
   args: { variant: 'outlined', label: 'Outlined Chip' },
};

export const Ghost: Story = { args: { variant: 'ghost', label: 'Ghost Chip' } };

export const WithIcon: Story = {
   args: { icon: <Icon name="Filter" />, label: 'Chip With Icon' },
};

export const WithCloseButton: Story = {
   args: {
      label: 'Closable Chip',
      onDelete: () => alert('Chip closed'),
   },
};

export const LongLabel: Story = {
   args: {
      label: 'This is a very long chip label that should not break layout',
   },
};
