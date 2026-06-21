import type { Meta, StoryObj } from '@storybook/react-vite';
import { PasswordInput } from './PasswordInput';

const meta = {
   component: PasswordInput,
   title: 'Components/Inputs/PasswordInput',
   tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = { args: { size: 'sm' } };

export const Large: Story = { args: { size: 'lg' } };

export const Error: Story = { args: { error: true } };

export const Disabled: Story = { args: { disabled: true } };
