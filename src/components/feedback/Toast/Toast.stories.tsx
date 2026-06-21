import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Toast } from './Toast';
import { ToastProvider } from './ToastProvider';
import { useToast } from './hooks/use-toast';
import { Button } from '@/components/general';

const meta: Meta<typeof Toast> = {
   title: 'Components/Feedback/Toast',
   component: Toast,
   tags: ['autodocs'],
   parameters: {
      layout: 'centered',
   },
   argTypes: {
      variant: {
         control: 'select',
         options: ['info', 'success', 'warning', 'error'],
         table: {
            defaultValue: { summary: 'info' },
         },
      },
      message: {
         control: 'text',
      },
   },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
   args: {
      id: 'toast-default',
      message: 'This is a standard notification using the component defaults.',
   },
};

export const Info: Story = {
   args: {
      id: 'toast-info',
      variant: 'info',
      message: 'A new software update is available for download.',
   },
};

export const Success: Story = {
   args: {
      id: 'toast-success',
      variant: 'success',
      message: 'Your profile changes have been saved successfully!',
   },
};

export const Warning: Story = {
   args: {
      id: 'toast-warning',
      variant: 'warning',
      message: 'Warning: Your storage usage has exceeded 85% capacity.',
   },
};

export const ErrorState: Story = {
   args: {
      id: 'toast-error',
      variant: 'error',
      message:
         'Failed to sync database. Please verify your connection credentials.',
   },
};

/* -------------------------------------------------------------------------- */
/*                        System Integration Live Demo                        */
/* -------------------------------------------------------------------------- */
const ToastSandbox: React.FC = () => {
   const showToast = useToast();

   return (
      <div
         style={{
            display: 'flex',
            gap: '12px',
            padding: '24px',
            alignItems: 'center',
         }}
      >
         <Button
            onClick={() =>
               showToast('Information fetched successfully.', 'info')
            }
         >
            Trigger Info
         </Button>
         <Button
            onClick={() =>
               showToast('Payment processed completely!', 'success')
            }
         >
            Trigger Success
         </Button>
         <Button
            onClick={() =>
               showToast('Session expiring in 2 minutes.', 'warning')
            }
         >
            Trigger Warning
         </Button>
         <Button
            onClick={() =>
               showToast('Transaction rejected by gatekeeper.', 'error')
            }
         >
            Trigger Error
         </Button>
      </div>
   );
};

export const LiveSystemDemo: StoryObj = {
   render: () => (
      <ToastProvider>
         <ToastSandbox />
      </ToastProvider>
   ),
   parameters: {
      layout: 'fullscreen',
   },
};
