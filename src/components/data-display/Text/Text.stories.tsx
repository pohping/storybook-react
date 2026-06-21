import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './Text';

const meta = {
   component: Text,
   title: 'Components/Data Display/Text',
   tags: ['autodocs'],
   argTypes: {
      variant: {
         control: { type: 'select' },
         options: [
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'body',
            'bodySmall',
            'caption',
         ],
      },
      color: {
         control: { type: 'select' },
         options: [
            'primary',
            'secondary',
            'text',
            'heading',
            'muted',
            'success',
            'warning',
            'danger',
         ],
      },
      align: {
         control: { type: 'select' },
         options: ['left', 'center', 'right', 'justify'],
      },
      as: {
         control: 'select',
         options: ['span', 'div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
      truncate: {
         control: 'number',
      },
      strikeThrough: {
         control: 'boolean',
      },
   },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
   args: {
      children: 'This is default typography',
   },
};

export const H1: Story = {
   args: {
      variant: 'h1',
      children: 'H1 Heading',
   },
};

export const H2: Story = {
   args: {
      variant: 'h2',
      children: 'H2 Heading',
   },
};

export const H3: Story = {
   args: {
      variant: 'h3',
      children: 'H3 Heading',
   },
};

export const H4: Story = {
   args: {
      variant: 'h4',
      children: 'H4 Heading',
   },
};

export const H5: Story = {
   args: {
      variant: 'h5',
      children: 'H5 Heading',
   },
};

export const H6: Story = {
   args: {
      variant: 'h6',
      children: 'H6 Heading',
   },
};

export const Body: Story = {
   args: {
      variant: 'body',
      children: 'This is body text',
   },
};

export const BodySmall: Story = {
   args: {
      variant: 'small',
      children: 'This is small body text',
   },
};

export const Caption: Story = {
   args: {
      variant: 'caption',
      children: 'This is a caption',
   },
};

export const Centered: Story = {
   args: {
      variant: 'body',
      align: 'center',
      children: 'Centered text',
   },
};

export const AsSpan: Story = {
   args: {
      variant: 'h1',
      as: 'span',
      children: 'H1 as span',
   },
};

export const StrikeThrough: Story = {
   args: {
      strikeThrough: true,
      children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
   },
};

export const TruncateText: Story = {
   args: {
      truncate: 1,
      children:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
   },
};
