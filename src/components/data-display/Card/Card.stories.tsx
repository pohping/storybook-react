import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
   title: 'Components/Data Display/Card',
   component: Card,
   tags: ['autodocs'],
   argTypes: {
      elevation: {
         control: 'select',
         options: [0, 1, 2, 3],
      },
      padded: {
         control: 'boolean',
      },
      variant: {
         control: 'select',
         options: ['elevated', 'filled', 'outlined', 'ghost'],
      },
   },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
   render: (args) => (
      <Card {...args}>
         <Card.Content>Default Card</Card.Content>
      </Card>
   ),
};

export const Elevated: Story = {
   render: (args) => (
      <Card variant="elevated" {...args}>
         <Card.Content>Elevated</Card.Content>
      </Card>
   ),
};

export const Outlined: Story = {
   render: (args) => (
      <Card variant="outlined" {...args}>
         <Card.Content>Outlined</Card.Content>
      </Card>
   ),
};

export const Ghost: Story = {
   render: (args) => (
      <Card variant="ghost" {...args}>
         <Card.Content>Ghost</Card.Content>
      </Card>
   ),
};

export const WithCover: Story = {
   render: (args) => (
      <Card style={{ width: '300px' }} padded {...args}>
         <Card.Cover
            src="https://plus.unsplash.com/premium_vector-1758974122276-e2cbd0b21da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHxjYXR8ZW58MHx8MHx8fDA%3D"
            fit="cover"
         />
         <Card.Content>Default Card</Card.Content>
      </Card>
   ),
};

// export const Horizontal: Story = {
//    render: (args) => (
//       <Card padded {...args} orientation="horizontal">
//          <Card.Cover
//             src="https://plus.unsplash.com/premium_vector-1758974122276-e2cbd0b21da6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk0fHxjYXR8ZW58MHx8MHx8fDA%3D"
//             fit="cover"
//          />
//          <Card.Content>Default Card</Card.Content>
//       </Card>
//    ),
// };
