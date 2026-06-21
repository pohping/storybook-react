import type { Meta, StoryObj } from '@storybook/react-vite';
import { RichTextEditor } from './RichTextEditor';

const meta = {
   component: RichTextEditor,
   title: 'Components/Inputs/RichTextEditor',
   tags: ['autodocs'],
   argTypes: {
      value: {
         readyOnly: {
            control: 'boolean',
         },
         placeholder: { control: 'text' },
      },
   },
} satisfies Meta<typeof RichTextEditor>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockContent = {
   type: 'doc',
   content: [
      {
         type: 'heading',
         attrs: { level: 1 },
         content: [
            {
               type: 'text',
               text: 'Welcome to Tiptap',
            },
         ],
      },
      {
         type: 'paragraph',
         content: [
            {
               type: 'text',
               text: 'Tiptap is a headless rich text editor built on top of ProseMirror.',
            },
         ],
      },
      {
         type: 'bulletList',
         content: [
            {
               type: 'listItem',
               content: [
                  {
                     type: 'paragraph',
                     content: [
                        {
                           type: 'text',
                           text: 'Fast and customizable',
                        },
                     ],
                  },
               ],
            },
            {
               type: 'listItem',
               content: [
                  {
                     type: 'paragraph',
                     content: [
                        {
                           type: 'text',
                           text: 'Works great with React',
                        },
                     ],
                  },
               ],
            },
         ],
      },
      {
         type: 'blockquote',
         content: [
            {
               type: 'paragraph',
               content: [
                  {
                     type: 'text',
                     text: 'This is a blockquote example.',
                  },
               ],
            },
         ],
      },
      {
         type: 'codeBlock',
         attrs: { language: 'js' },
         content: [
            {
               type: 'text',
               text: "console.log('Hello Tiptap')",
            },
         ],
      },
   ],
};

export const Default: Story = {};

export const ReadOnly: Story = { args: { value: mockContent, readOnly: true } };
