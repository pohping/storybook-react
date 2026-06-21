import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './Pagination';
import { useState } from 'react';

const meta = {
   component: Pagination,
   title: 'Components/Navigation/Pagination',
   tags: ['autodocs'],
   argTypes: {},
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof Pagination>;

const Template: Story = {
   render: (args) => {
      const [page, setPage] = useState(1);

      return (
         <div
            style={{
               padding: '2rem',
               background: '#f9f9f9',
               borderRadius: '8px',
            }}
         >
            <p style={{ marginBottom: '1rem', fontWeight: '500' }}>
               Current page: <strong>{page}</strong> / {args.totalPages}
            </p>
            <Pagination {...args} page={page} onPageChange={setPage} />
         </div>
      );
   },
};

export const Default: Story = {
   ...Template,
   args: {
      page: 1,
      totalPages: 10,
      siblingCount: 2,
   },
};

export const Small: Story = {
   ...Template,
   args: {
      totalPages: 10,
      size: 'sm',
   },
};

export const Large: Story = {
   ...Template,
   args: {
      totalPages: 10,
      size: 'lg',
   },
};

export const Minimal: Story = {
   ...Template,
   args: {
      totalPages: 10,
      page: 5,
      showFirstLast: false,
      showPrevNext: true,
      siblingCount: 0,
   },
};

export const ManyPages: Story = {
   ...Template,
   args: {
      totalPages: 100,
      page: 50,
      siblingCount: 1,
   },
};
