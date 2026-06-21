import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex } from './Flex';

const meta = {
   component: Flex,
   title: 'Components/Layout/Flex',
   tags: ['autodocs'],
   argTypes: {
      direction: {
         control: 'radio',
         options: ['row', 'column', 'row-reverse'],
      },
      wrap: {
         control: 'radio',
         options: ['nowrap', 'wrap', 'wrap-reverse'],
      },
      justify: {
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
      align: {
         control: 'select',
         options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      },
      gap: { control: 'number' },
   },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const RowJustifyStart: Story = {
   render: (args) => (
      <Flex
         direction="row"
         justify="flex-start"
         style={{ width: '400px', height: '100px', backgroundColor: '#f0f0f0' }}
         {...args}
      >
         <div
            style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
         >
            1
         </div>
         <div
            style={{
               width: '100px',
               height: '100px',
               backgroundColor: 'green',
            }}
         >
            2
         </div>
         <div
            style={{ width: '100px', height: '100px', backgroundColor: 'blue' }}
         >
            3
         </div>
      </Flex>
   ),
};

export const RowJustifyCenter: Story = {
   render: (args) => (
      <Flex
         direction="row"
         justify="center"
         style={{ width: '400px', height: '100px', backgroundColor: '#f0f0f0' }}
         {...args}
      >
         <div
            style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
         >
            1
         </div>
         <div
            style={{
               width: '100px',
               height: '100px',
               backgroundColor: 'green',
            }}
         >
            2
         </div>
         <div
            style={{ width: '100px', height: '100px', backgroundColor: 'blue' }}
         >
            3
         </div>
      </Flex>
   ),
};

export const RowJustifySpaceBetween: Story = {
   render: (args) => (
      <Flex
         direction="row"
         justify="space-between"
         style={{ width: '400px', height: '100px', backgroundColor: '#f0f0f0' }}
         {...args}
      >
         <div
            style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
         >
            1
         </div>
         <div
            style={{
               width: '100px',
               height: '100px',
               backgroundColor: 'green',
            }}
         >
            2
         </div>
         <div
            style={{ width: '100px', height: '100px', backgroundColor: 'blue' }}
         >
            3
         </div>
      </Flex>
   ),
};

export const RowAlignCenter: Story = {
   render: (args) => (
      <Flex
         direction="row"
         align="center"
         style={{ width: '400px', height: '200px', backgroundColor: '#f0f0f0' }}
         {...args}
      >
         <div
            style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
         >
            1
         </div>
         <div
            style={{
               width: '100px',
               height: '100px',
               backgroundColor: 'green',
            }}
         >
            2
         </div>
         <div
            style={{ width: '100px', height: '100px', backgroundColor: 'blue' }}
         >
            3
         </div>
      </Flex>
   ),
};

export const RowAlignStretch: Story = {
   render: (args) => (
      <Flex
         direction="row"
         align="stretch"
         style={{ width: '400px', height: '200px', backgroundColor: '#f0f0f0' }}
         {...args}
      >
         <div style={{ width: '100px', backgroundColor: 'red' }}>1</div>
         <div style={{ width: '100px', backgroundColor: 'green' }}>2</div>
         <div style={{ width: '100px', backgroundColor: 'blue' }}>3</div>
      </Flex>
   ),
};

export const ColumnJustifyCenter: Story = {
   render: (args) => (
      <Flex
         direction="column"
         justify="center"
         style={{ width: '100px', height: '400px', backgroundColor: '#f0f0f0' }}
         {...args}
      >
         <div
            style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
         >
            1
         </div>
         <div
            style={{
               width: '100px',
               height: '100px',
               backgroundColor: 'green',
            }}
         >
            2
         </div>
         <div
            style={{ width: '100px', height: '100px', backgroundColor: 'blue' }}
         >
            3
         </div>
      </Flex>
   ),
};

export const ColumnAlignCenter: Story = {
   render: (args) => (
      <Flex
         direction="column"
         align="center"
         style={{ width: '200px', height: '400px', backgroundColor: '#f0f0f0' }}
         {...args}
      >
         <div
            style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
         >
            1
         </div>
         <div
            style={{
               width: '100px',
               height: '100px',
               backgroundColor: 'green',
            }}
         >
            2
         </div>
         <div
            style={{ width: '100px', height: '100px', backgroundColor: 'blue' }}
         >
            3
         </div>
      </Flex>
   ),
};

export const ColumnAlignStretch: Story = {
   render: (args) => (
      <Flex
         direction="column"
         align="stretch"
         style={{ width: '200px', height: '400px', backgroundColor: '#f0f0f0' }}
         {...args}
      >
         <div style={{ height: '100px', backgroundColor: 'red' }}>1</div>
         <div style={{ height: '100px', backgroundColor: 'green' }}>2</div>
         <div style={{ height: '100px', backgroundColor: 'blue' }}>3</div>
      </Flex>
   ),
};

export const Wrapped: Story = {
   render: (args) => (
      <Flex
         wrap="wrap"
         style={{ width: '250px', backgroundColor: '#f0f0f0' }}
         {...args}
      >
         {Array.from({ length: 5 }, (_, i) => (
            <div
               key={i}
               style={{
                  width: '100px',
                  height: '100px',
                  backgroundColor: 'purple',
                  margin: '5px',
               }}
            >
               Item {i + 1}
            </div>
         ))}
      </Flex>
   ),
};

export const DifferentSizes: Story = {
   render: (args) => (
      <Flex
         direction="row"
         style={{ width: '400px', backgroundColor: '#f0f0f0' }}
         {...args}
      >
         <div style={{ width: '50px', height: '50px', backgroundColor: 'red' }}>
            Small
         </div>
         <div
            style={{
               width: '150px',
               height: '150px',
               backgroundColor: 'green',
            }}
         >
            Medium
         </div>
         <div
            style={{ width: '200px', height: '200px', backgroundColor: 'blue' }}
         >
            Large
         </div>
      </Flex>
   ),
};
