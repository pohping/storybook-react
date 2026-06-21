import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
   title: 'Components/Data Display/Table',
   component: Table,
   tags: ['autodocs'],
   argTypes: {
      size: {
         control: 'radio',
         options: ['sm', 'md', 'lg'],
      },
      fullWidth: {
         control: 'boolean',
      },
      striped: {
         control: 'boolean',
      },
      bordered: {
         control: 'boolean',
      },
      caption: {
         control: 'object',
      },
   },
};

export default meta;
type Story = StoryObj<typeof Table>;

const TableTemplate = (args: any) => (
   <Table {...args}>
      <Table.Header>
         <Table.Row>
            <Table.Head>Name</Table.Head>
            <Table.Head>Role</Table.Head>
            <Table.Head align="right">Status</Table.Head>
         </Table.Row>
      </Table.Header>
      <Table.Body>
         <Table.Row>
            <Table.Cell>John Doe</Table.Cell>
            <Table.Cell>Developer</Table.Cell>
            <Table.Cell align="right">Active</Table.Cell>
         </Table.Row>
         <Table.Row>
            <Table.Cell>Jane Smith</Table.Cell>
            <Table.Cell>Designer</Table.Cell>
            <Table.Cell align="right">Busy</Table.Cell>
         </Table.Row>
      </Table.Body>
   </Table>
);

export const Default: Story = {
   render: (args) => <TableTemplate {...args} />,
   args: {
      size: 'md',
      striped: false,
   },
};

export const Striped: Story = {
   render: (args) => <TableTemplate {...args} />,
   args: {
      striped: true,
   },
};

export const Compact: Story = {
   render: (args) => <TableTemplate {...args} />,
   args: {
      size: 'sm',
   },
};
