import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dialog } from './Dialog';
import { useState } from 'react';
import { Button } from '@/components/general';

const meta = {
   title: 'Components/Surfaces/Dialog',
   component: Dialog,
   tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
   render: (args) => {
      const [isOpen, setIsOpen] = useState(false);

      const open = () => setIsOpen(true);

      const close = () => {
         setIsOpen(false);
      };

      const confirm = () => {
         alert('Confirm clicked');
         setIsOpen(false);
      };

      return (
         <>
            <Button onClick={open}>Open Dialog</Button>
            <Dialog
               open={isOpen}
               onCancel={close}
               onConfirm={confirm}
               {...args}
            />
         </>
      );
   },
};

export const Default: Story = { ...Template };

export const CustomButton: Story = {
   ...Template,
   args: {
      cancelButton: 'Custom Cancel Button',
      confirmButton: 'Custom Confirm Button',
   },
};

export const ScrollablePage: Story = {
   ...Template,
   decorators: (Story) => (
      <div style={{ background: '#eee', height: '200vh', padding: '10px' }}>
         <Story />
      </div>
   ),
};
