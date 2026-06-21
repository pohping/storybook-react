import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './Divider';

const meta = {
   title: 'Components/Layout/Divider',
   component: Divider,
   tags: ['autodocs'],
   argTypes: {
      orientation: { control: 'radio', options: ['horizontal', 'vertical'] },
   },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
   decorators: (Story) => (
      <div
         style={{
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
         }}
      >
         <Story />
      </div>
   ),
};

export const Default: Story = { ...Template };

export const Vertical: Story = {
   ...Template,
   args: { orientation: 'vertical' },
};

export const Horizontal: Story = {
   ...Template,
   args: { orientation: 'horizontal' },
};

export const HorizontalWithLabel: Story = {
   ...Template,
   args: { orientation: 'horizontal', children: 'horizontal' },
};
