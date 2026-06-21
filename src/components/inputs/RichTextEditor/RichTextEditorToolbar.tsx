import { useEditorState } from '@tiptap/react';
import clsx from 'clsx';
import { Button } from '@/components/general';
import { Icon } from '@/components/data-display';
import { Dropdown } from '@/components/navigation';
import { Upload, type UploadProps } from '../Upload';
import type {
   RichTextToolbarButtonProps,
   RichTextToolbarProps,
} from './RichTextEditor.types';
import styles from './RichTextEditor.module.scss';
import { getBase64 } from './RichTextEditor.utils';

const RichTextToolbarButton = ({
   active,
   icon,
   ...rest
}: RichTextToolbarButtonProps) => {
   return (
      <Button
         {...rest}
         size="sm"
         variant="text"
         className={clsx({ [styles.active]: active })}
         icon={<Icon name={icon} />}
      />
   );
};

export const RichTextToolbar = ({ editor }: RichTextToolbarProps) => {
   const editorState = useEditorState({
      editor,
      selector: ({ editor }) => ({
         bold: editor.isActive('bold'),
         italic: editor.isActive('italic'),
         strike: editor.isActive('strike'),
         bulletList: editor.isActive('bulletList'),
         orderedList: editor.isActive('orderedList'),
         textAlignLeft: editor.isActive({ textAlign: 'left' }),
         textAlignCenter: editor.isActive({ textAlign: 'center' }),
         textAlignRight: editor.isActive({ textAlign: 'right' }),
      }),
   });

   const handleUploadChange: UploadProps['onChange'] = async (files) => {
      if (files.length > 0 && files[0].origin) {
         const originFile = files[0].origin;
         const src = await getBase64(originFile);
         editor.chain().focus().setImage({ src }).run();
      }
   };

   const toggleBold = () => editor.chain().focus().toggleBold().run();

   const toggleItalic = () => editor.chain().focus().toggleItalic().run();

   const toggleBulletList = () =>
      editor.chain().focus().toggleBulletList().run();

   const toggleOrderedList = () =>
      editor.chain().focus().toggleOrderedList().run();

   const setTextAlign = (align: string) => () =>
      editor.chain().focus().setTextAlign(align).run();

   const setFontSize = (size: string) => () =>
      editor.chain().focus().setFontSize(size).run();

   return (
      <div className={styles.toolbar}>
         <div className={styles.toolbarGroup}>
            <RichTextToolbarButton
               onClick={toggleBold}
               active={editorState.bold}
               icon="Bold"
            />
            <RichTextToolbarButton
               onClick={toggleItalic}
               active={editorState.italic}
               icon="Italic"
            />
            <RichTextToolbarButton
               onClick={toggleBulletList}
               active={editorState.bulletList}
               icon="UnorderedList"
            />
            <RichTextToolbarButton
               onClick={toggleOrderedList}
               active={editorState.orderedList}
               icon="OrderedList"
            />
            <RichTextToolbarButton
               onClick={setTextAlign('left')}
               active={editorState.textAlignLeft}
               icon="AlignLeft"
            />
            <RichTextToolbarButton
               onClick={setTextAlign('center')}
               active={editorState.textAlignCenter}
               icon="AlignCenter"
            />
            <RichTextToolbarButton
               onClick={setTextAlign('right')}
               active={editorState.textAlignRight}
               icon="AlignRight"
            />
         </div>
         <div className={styles.toolbarGroup}>
            <Upload showUploadList={false} onChange={handleUploadChange}>
               <RichTextToolbarButton icon="Gallery" />
            </Upload>
            <Dropdown
               menu={[
                  {
                     label: 'Normal',
                     onClick: setFontSize('var(--font-size-md)'),
                  },
                  {
                     label: 'Heading 1',
                     onClick: setFontSize('var(--font-size-4xl)'),
                  },
                  {
                     label: 'Heading 2',
                     onClick: setFontSize('var(--font-size-2xl)'),
                  },
               ]}
            >
               <RichTextToolbarButton icon="Paragraph" />
            </Dropdown>
         </div>
      </div>
   );
};
