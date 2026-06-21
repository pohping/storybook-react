import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu } from './Menu';

const meta = {
   component: Menu,
   title: 'Components/Navigation/Menu',
   tags: ['autodocs'],
   argTypes: {
      orientation: {
         control: 'radio',
         options: ['horizontal', 'vertical'],
      },
   },
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
   render: (args) => (
      <Menu {...args}>
         <Menu.Item active>Dashboard</Menu.Item>

         <Menu.Sub label="Settings">
            <Menu.Item>Profile</Menu.Item>
            <Menu.Item>Security</Menu.Item>
         </Menu.Sub>

         <Menu.Item as="a" href="https://google.com">
            External Link
         </Menu.Item>
      </Menu>
   ),
};

export const Vertical: Story = {
   render: (args) => (
      <Menu {...args} orientation="vertical">
         <Menu.Item active>Dashboard</Menu.Item>

         <Menu.Sub label="Settings">
            <Menu.Item>Profile</Menu.Item>
            <Menu.Item>Security</Menu.Item>
         </Menu.Sub>

         <Menu.Item as="a" href="https://google.com">
            External Link
         </Menu.Item>
      </Menu>
   ),
};

export const Horizontal: Story = {
   render: (args) => (
      <Menu {...args} orientation="horizontal">
         <Menu.Item active>Dashboard</Menu.Item>

         <Menu.Sub label="Settings">
            <Menu.Item>Profile</Menu.Item>
            <Menu.Item>Security</Menu.Item>
         </Menu.Sub>

         <Menu.Item as="a" href="https://google.com">
            External Link
         </Menu.Item>
      </Menu>
   ),
};
