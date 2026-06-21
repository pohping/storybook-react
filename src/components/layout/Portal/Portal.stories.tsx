import type { Meta, StoryObj } from '@storybook/react-vite';
import { Portal } from './Portal';

const meta = {
   component: Portal,
   title: 'Components/Layout/Portal',
   tags: ['autodocs'],
   argTypes: {
      open: {
         control: 'boolean',
         description: 'Only render when open (useful for modals/toasts)',
      },
   },
} satisfies Meta<typeof Portal>;

export default meta;

type Story = StoryObj<typeof Portal>;

const Template: Story = {
   render: (args) => {
      return (
         <>
            <div
               style={{
                  padding: '48px',
                  background: '#f3dcdc',
                  height: '100vh',
               }}
            >
               <p>Main App Content</p>
            </div>
            <Portal {...args}>
               <div
                  style={{
                     position: 'fixed',
                     top: '20%',
                     left: '50%',
                     transform: 'translateX(-50%)',
                     padding: '32px',
                     background: '#fff',
                     boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
                     borderRadius: '4px',
                  }}
               >
                  <p>This is rendered via Portal.</p>
               </div>
            </Portal>
         </>
      );
   },
};

export const Default: Story = { ...Template };
