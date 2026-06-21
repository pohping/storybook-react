import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown } from './Dropdown';
import { Button } from '@/components/general';

const menu = [
   {
      label: 'View Profile',
      onClick: () => console.log('view profile clicked'),
   },
   {
      label: 'Account Settings',
      onClick: () => console.log('account settings clicked'),
   },
   {
      label: 'Sign Out',
      onClick: () => console.log('sign out clicked'),
   },
];

const meta = {
   title: 'Components/Navigation/Dropdown',
   component: Dropdown,
   tags: ['autodocs'],
   argTypes: {
      placement: {
         control: 'select',
         options: [
            'top-start',
            'top-end',
            'right-start',
            'right-end',
            'bottom-start',
            'bottom-end',
            'left-start',
            'left-end',
         ],
      },
   },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
   args: {
      children: <Button>Default</Button>,
      menu,
   },
};

export const HoverTrigger: Story = {
   args: {
      children: <Button>Hover To Open</Button>,
      menu,
      trigger: 'hover',
   },
};

export const ClickTrigger: Story = {
   args: {
      children: <Button>Click To Open</Button>,
      menu,
      trigger: 'click',
   },
};

export const WithDivider: Story = {
   args: {
      children: <Button>With Divider</Button>,
      menu: [
         { label: 'View Profile' },
         { label: 'Account Settings' },
         { divider: true },
         { label: 'Sign Out' },
      ],
   },
};

export const WithErrorItem: Story = {
   args: {
      children: <Button>Click To Open</Button>,
      menu: [
         { label: '1st menu item' },
         { label: '2nd menu item' },
         { label: '3rd menu item' },
         { label: '4th menu item', danger: true },
      ],
   },
};
