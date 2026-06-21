import type { Meta, StoryObj } from '@storybook/react-vite';
import type { HTMLAttributes } from 'react';
import { Grid } from './Grid';

const meta = {
   title: 'Components/Layout/Grid',
   component: Grid,
   tags: ['autodocs'],
   argTypes: {
      columns: {
         control: 'number',
      },
      minChildWidth: {
         control: 'text',
      },
      gap: { control: 'text' },
      rowGap: { control: 'text' },
      columnGap: { control: 'text' },
      justifyItems: {
         control: 'select',
         options: [
            'flex-start',
            'flex-end',
            'center',
            'space-between',
            'space-around',
            'space-evenly',
         ],
      },
      alignItems: {
         control: 'select',
         options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      },
   },
} satisfies Meta<typeof Grid>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
   args: { gap: 3, columns: 6 },
   render: (args) => (
      <>
         <div
            style={{
               textAlign: 'center',
               marginBottom: '16px',
               fontSize: '24px',
               fontWeight: '600',
            }}
         >
            6 Grid Columns
         </div>
         <Grid {...args} />
      </>
   ),
};

const Item = ({ children, style, ...rest }: HTMLAttributes<HTMLDivElement>) => (
   <div
      {...rest}
      style={{ padding: 12, borderRadius: 8, background: '#eee', ...style }}
   >
      {children}
   </div>
);

export const Default: Story = {
   ...Template,
   args: {
      columns: { sm: 1, md: 2, lg: 4 },
      children: Array.from({ length: 8 }).map((_, i) => (
         <Item key={i}>Item {i + 1}</Item>
      )),
   },
};

export const MinChildWidth: Story = {
   ...Template,
   args: {
      minChildWidth: '220px',
      //  gap: 3,
      columns: { sm: 1, md: 2, lg: 3 },
      children: Array.from({ length: 10 }).map((_, i) => (
         <Item key={i}>Card {i + 1}</Item>
      )),
   },
};

export const Spanning: Story = {
   ...Template,
   args: {
      children: (
         <>
            <Grid.Item span={2}>
               <Item style={{ background: '#eef' }}>Spans 2</Item>
            </Grid.Item>
            <Grid.Item span={4}>
               <Item style={{ background: '#efe' }}>Span 4</Item>
            </Grid.Item>
            <Grid.Item>
               <Item style={{ background: '#fdf5f5' }}>Normal</Item>
            </Grid.Item>
            <Grid.Item>
               <Item style={{ background: '#fdf5f5' }}>Normal</Item>
            </Grid.Item>
         </>
      ),
   },
};

export const ResponsiveSpan: Story = {
   ...Template,
   args: {
      children: (
         <>
            <Grid.Item span={2}>
               <Item style={{ background: '#eef' }}>Featured — spans 2</Item>
            </Grid.Item>
            <Grid.Item span={{ sm: 6, md: 2 }}>
               <Item style={{ background: '#efe' }}>Responsive span</Item>
            </Grid.Item>
            <Grid.Item span={{ sm: 6, md: 2 }}>
               <Item style={{ background: '#efe' }}>Responsive span</Item>
            </Grid.Item>
         </>
      ),
   },
};
