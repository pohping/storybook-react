import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from './Breadcrumb';
import { Icon } from '@/components/data-display';

const meta = {
   component: Breadcrumb,
   title: 'Components/Navigation/Breadcrumb',
   tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
   render: (args) => (
      <Breadcrumb {...args}>
         <a href="#home">Home</a>
         <a href="#components">Components</a>
         <a href="#navigation">Navigation</a>
         <span>Breadcrumb</span>
      </Breadcrumb>
   ),
};

export const CustomSeparatorString: Story = {
   render: (args) => (
      <Breadcrumb {...args} separator={<span>/</span>}>
         <a href="#dashboard">Dashboard</a>
         <a href="#analytics">Analytics</a>
         <span>Monthly Report</span>
      </Breadcrumb>
   ),
};

export const WithItemIcons: Story = {
   render: (args) => (
      <Breadcrumb {...args}>
         <a
            href="#home"
            style={{
               display: 'inline-flex',
               alignItems: 'center',
               gap: '0.5em',
            }}
         >
            <Icon name="Home" />
            <span>Home</span>
         </a>
         <a
            href="#archive"
            style={{
               display: 'inline-flex',
               alignItems: 'center',
               gap: '0.5em',
            }}
         >
            <Icon name="Document" />
            <span>Documents</span>
         </a>
         <span
            style={{
               display: 'inline-flex',
               alignItems: 'center',
               gap: '0.5em',
            }}
         >
            <Icon name="File" />
            <span>invoice.pdf</span>
         </span>
      </Breadcrumb>
   ),
};
