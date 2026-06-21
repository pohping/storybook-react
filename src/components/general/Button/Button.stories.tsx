import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { Icon } from '@/components/data-display';

const meta = {
   component: Button,
   title: 'Components/General/Button',
   tags: ['autodocs'],
   argTypes: {
      variant: {
         control: 'select',
         options: ['primary', 'secondary', 'text', 'link'],
      },
      size: {
         control: 'radio',
         options: ['sm', 'md', 'lg'],
      },
      fullWidth: {
         control: 'boolean',
      },
      loading: {
         control: 'boolean',
      },
      icon: {
         control: 'object',
      },
      iconPosition: {
         control: 'radio',
      },
   },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
   args: { children: 'Default' },
};

export const Primary: Story = {
   args: { children: 'Primary', variant: 'primary' },
};

export const Secondary: Story = {
   args: { children: 'Secondary', variant: 'secondary' },
};

export const Text: Story = {
   args: { children: 'Text', variant: 'text' },
};

export const Link: Story = {
   args: { children: 'Link', variant: 'link' },
};

export const Small: Story = {
   args: { children: 'Small', size: 'sm' },
};

export const Large: Story = {
   args: { children: 'Large', size: 'lg' },
};

export const WithIcon: Story = {
   args: { children: 'Document', icon: <Icon name="Document" /> },
};

export const IconOnly: Story = {
   args: { icon: <Icon name="Cart" /> },
};

export const LoadingState: Story = {
   args: { children: 'Loading', loading: true },
};

export const DisabledState: Story = {
   args: { children: 'Disabled', disabled: true },
};
