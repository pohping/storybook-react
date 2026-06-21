import type { Meta, StoryObj } from '@storybook/react-vite';
import { Loader } from './Loader';

const meta = {
   component: Loader,
   title: 'Components/Feedback/Loader',
   tags: ['autodocs'],
   argTypes: {
      variant: {
         control: 'radio',
      },
      active: {
         control: 'boolean',
      },
      minDisplayMs: {
         control: 'number',
      },
   },
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Inline: Story = {
   args: { active: true, variant: 'inline' },
};

export const Page: Story = {
   args: { active: true, variant: 'page' },
   decorators: (Story) => (
      <div style={{ height: '60vh' }}>
         <Story />
      </div>
   ),
};
