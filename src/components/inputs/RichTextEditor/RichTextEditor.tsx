import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import ListItem from '@tiptap/extension-list-item';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle, FontSize } from '@tiptap/extension-text-style';
import { forwardRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './RichTextEditor.module.scss';
import type { RichTextEditorProps } from './RichTextEditor.types';
import { RichTextToolbar } from './RichTextEditorToolbar';

export const RichTextEditor = forwardRef<HTMLDivElement, RichTextEditorProps>(
   (props, ref) => {
      const {
         value,
         onChange,
         readOnly = false,
         placeholder,
         className,
      } = props;
      const editor = useEditor({
         extensions: [
            StarterKit.configure({
               heading: { levels: [1, 2, 3] },
            }),
            TextAlign.configure({
               types: ['heading', 'paragraph'],
            }),
            TextStyle,
            FontSize,
            Image,
            ListItem,
         ],
         content: value,
         editable: !readOnly,
         onUpdate: ({ editor }) => {
            onChange?.(editor.getHTML());
         },
         editorProps: {
            attributes: {
               class: 'prose prose-sm focus:outline-none min-h-32',
            },
         },
      });

      useEffect(() => {
         if (editor && value !== editor.getHTML()) {
            editor.commands.setContent(value || '');
         }
      }, [value, editor]);

      if (!editor) return null;

      const focusEditor = () => {
         editor.commands.focus();
      };

      return (
         <div
            ref={ref}
            className={clsx(
               styles.textEditor,
               { [styles.readOnly]: readOnly },
               className,
            )}
         >
            {!readOnly && <RichTextToolbar editor={editor} />}
            <div className={styles.content} onClick={focusEditor}>
               <EditorContent editor={editor} placeholder={placeholder} />
            </div>
         </div>
      );
   },
);
