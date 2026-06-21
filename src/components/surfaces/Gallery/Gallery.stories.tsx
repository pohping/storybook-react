import type { Meta, StoryObj } from '@storybook/react-vite';
import { Gallery } from './Gallery';

const meta = {
   title: 'Components/Surfaces/Gallery',
   component: Gallery,
   tags: ['autodocs'],
   argTypes: { thumbnailShow: { control: 'number' } },
} satisfies Meta<typeof Gallery>;

export default meta;

type Story = StoryObj<typeof meta>;

const sources = [
   {
      original:
         'https://plus.unsplash.com/premium_vector-1719015253440-ccedd0c117c3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbnail:
         'https://plus.unsplash.com/premium_vector-1719015253440-ccedd0c117c3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   },
   {
      original:
         'https://plus.unsplash.com/premium_vector-1721649515837-266a4ec5a95a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbnail:
         'https://plus.unsplash.com/premium_vector-1721649515837-266a4ec5a95a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   },
   {
      original:
         'https://plus.unsplash.com/premium_vector-1725979450926-f7980a4e770f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbnail:
         'https://plus.unsplash.com/premium_vector-1725979450926-f7980a4e770f?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   },
   {
      original:
         'https://plus.unsplash.com/premium_vector-1722009379967-6e4844e5f8a1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbnail:
         'https://plus.unsplash.com/premium_vector-1722009379967-6e4844e5f8a1?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   },

   {
      original:
         'https://plus.unsplash.com/premium_vector-1721649515784-efe35c864a28?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbnail:
         'https://plus.unsplash.com/premium_vector-1721649515784-efe35c864a28?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   },
   {
      original:
         'https://plus.unsplash.com/premium_vector-1721649515677-2b8870358071?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbnail:
         'https://plus.unsplash.com/premium_vector-1721649515677-2b8870358071?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   },
   {
      original:
         'https://images.unsplash.com/vector-1749806230892-69cf9bc921c7?q=80&w=879&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbnail:
         'https://images.unsplash.com/vector-1749806230892-69cf9bc921c7?q=80&w=879&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   },
   {
      original:
         'https://plus.unsplash.com/premium_vector-1721649515752-94bcdb8057fa?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      thumbnail:
         'https://plus.unsplash.com/premium_vector-1721649515752-94bcdb8057fa?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   },
];

export const Default: Story = {
   args: { sources },
   decorators: (Story) => (
      <div style={{ width: '500px' }}>
         <Story />
      </div>
   ),
};
