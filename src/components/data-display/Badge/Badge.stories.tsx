import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
   title: 'Components/Data Display/Badge',
   component: Badge,
   tags: ['autodocs'],
   argTypes: {
      count: {
         control: 'number',
      },
      text: {
         control: 'text',
      },
      dot: {
         control: 'boolean',
      },
      maxCount: {
         control: 'number',
      },
      variant: {
         control: 'select',
         options: ['primary', 'success', 'danger', 'warning', 'neutral'],
      },
      offset: {
         control: 'text',
      },
   },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
   args: { count: 6 },
   render: (args) => (
      <Badge {...args}>
         <div
            style={{
               background: '#adadad',
               width: '64px',
               height: '64px',
               borderRadius: '5px',
            }}
         />
      </Badge>
   ),
};

export const Default: Story = { ...Template };

export const ShortNumber: Story = {
   ...Template,
   args: {
      count: 6,
   },
};

export const LongNumber: Story = {
   ...Template,
   args: {
      count: 90000,
   },
};

export const Text: Story = {
   render: (args) => (
      <Badge {...args}>
         <div
            style={{
               background: '#adadad',
               width: '320px',
               height: '320px',
               borderRadius: '5px',
            }}
         />
      </Badge>
   ),
   args: {
      count: undefined,
      text: 'Lorem Ipsum',
   },
};

export const Dot: Story = {
   ...Template,
   args: {
      dot: true,
   },
};
