import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';

const meta = {
   title: 'Components/Data Display/Icon',
   component: Icon,
   tags: ['autodocs'],
   argTypes: {
      name: {
         control: 'select',
      },
      size: { control: 'text' },
      color: {
         control: 'color',
      },
      spin: {
         control: 'boolean',
      },
      title: { control: 'text' },
   },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
   args: {
      name: 'Document',
   },
};

export const ExtraSmall: Story = {
   args: {
      name: 'Calendar',
      size: 'xs',
   },
};

export const Small: Story = {
   args: {
      name: 'Calendar',
      size: 'sm',
   },
};

export const Large: Story = {
   args: {
      name: 'Calendar',
      size: 'lg',
   },
};

export const ExtraLarge: Story = {
   args: {
      name: 'Calendar',
      size: 'xl',
   },
};
