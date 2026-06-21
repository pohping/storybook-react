import type { IconName } from '@/components/data-display/Icon/Icon.types';
import type { ComponentPropsWithoutRef } from 'react';
import type { Content } from '@tiptap/react';

export interface RichTextEditorProps extends Omit<
   ComponentPropsWithoutRef<'div'>,
   'value' | 'onChange'
> {
   /** The content structure parsed by the editor. */
   value?: Content;
   /** allback fired whenever the user updates the editor contents */
   onChange?: (value: string) => void;
   /** If true, locks interaction and switches the editor interface into a non-editable viewer state */
   readOnly?: boolean;
   /** Muted placeholder string to display when the editor area is completely empty */
   placeholder?: string;
}

export interface RichTextToolbarProps {
   /** The active core Tiptap editor instance returned from the `useEditor` hook */
   editor: any;
}

export interface RichTextToolbarButtonProps {
   /** True if the selection range or node matches the current action's formatting */
   active?: boolean;
   /** The string-based identifier of the icon asset to render inside the button layout */
   icon: IconName;
   /** Handler triggered when clicking the item */
   onClick?: () => void;
}
