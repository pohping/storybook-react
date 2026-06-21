import type { Meta, StoryObj } from '@storybook/react-vite';
import { Form } from './Form';
import type { FormProps } from './Form.types';
import {
   DatePicker,
   NumberInput,
   PasswordInput,
   Radio,
   Rating,
   TextInput,
   Select,
} from '@/components/inputs';
import { Button } from '../Button';

const meta = {
   component: Form,
   title: 'Components/General/Form',
   tags: ['autodocs'],
   argTypes: {
      defaultValues: {
         control: 'object',
      },
      children: {
         control: 'object',
      },
      orientation: {
         control: 'radio',
         options: ['horizontal', 'vertical'],
      },
   },
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

const Template: Story = {
   render: (args) => {
      const handleSubmit: FormProps['onSubmit'] = (v) => {
         console.log(v);
      };

      return (
         <Form onSubmit={handleSubmit} {...args} style={{ width: '500px' }}>
            <Form.Item
               label="Email"
               name="email"
               constraints={[
                  { required: true, message: 'Email is required' },
                  {
                     pattern:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                     message: 'Invalid email format.',
                  },
               ]}
            >
               <TextInput placeholder="Enter email address" />
            </Form.Item>
            <Form.Item
               label="Password"
               name="password"
               constraints={[
                  { required: true, message: 'Password is required' },
                  {
                     pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                     message:
                        'At least 8 characters, including at least one letter and one number.',
                  },
               ]}
            >
               <PasswordInput placeholder="Enter strong password" />
            </Form.Item>
            <Form.Item
               label="Gender"
               name="gender"
               constraints={[
                  { required: true, message: 'Gender is required.' },
               ]}
            >
               <Radio.Group>
                  <Radio value="male" label="Male" />
                  <Radio value="female" label="Female" />
                  <Radio value="other" label="Other" />
               </Radio.Group>
            </Form.Item>
            <Form.Item
               label="Birthday"
               name="dob"
               constraints={[
                  { required: true, message: 'Date of birth is required.' },
               ]}
            >
               <DatePicker />
            </Form.Item>
            <Form.Item
               label="Age"
               name="age"
               constraints={[
                  { required: true, message: 'Age is required.' },
                  ({ stock }) => {
                     if ((stock as number) < 0)
                        return 'Age cannot less than 0.';
                  },
               ]}
            >
               <NumberInput placeholder="Age" />
            </Form.Item>
            <Form.Item label="Religion" name="religion" constraints={[]}>
               <Select
                  placeholder="Select religion"
                  options={[
                     { value: 'buddhism', label: 'Buddhism' },
                     { value: 'islam', label: 'Islam' },
                     { value: 'hinduism', label: 'Hinduism' },
                  ]}
               />
            </Form.Item>
            <Form.Item label="Rating" name="rate">
               <Rating />
            </Form.Item>
            <Form.Item>
               <Button type="submit">Submit</Button>
            </Form.Item>
         </Form>
      );
   },
};

export const Default: Story = { ...Template };

export const Horizontal: Story = {
   ...Template,
   args: { orientation: 'horizontal' },
};

export const Vertical: Story = {
   ...Template,
   args: { orientation: 'vertical' },
};
