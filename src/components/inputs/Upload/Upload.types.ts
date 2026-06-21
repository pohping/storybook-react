import type { ComponentPropsWithoutRef } from 'react';

export interface UploadFile {
   uid?: string;
   name?: string;
   url?: string;
   origin?: File;
   error?: boolean;
}

export type UploadListType = 'picture-square' | 'picture-circle' | 'text';

export interface UploadProps extends Omit<
   ComponentPropsWithoutRef<'div'>,
   'onChange'
> {
   /** Allow multiple files to be selected */
   multiple?: boolean;
   /** Max file size in MB before flagging an error */
   maxFileSizeMB?: number;
   /** Accepted file types (e.g., 'image/*, .pdf') */
   accept?: string;
   /** Disabled state */
   disabled?: boolean;
   /** Change handler that returns the array of processed files */
   onChange?: (files: UploadFile[]) => void;
   /** Whether to show the default list of uploaded files */
   showUploadList?: boolean;
   /** Visual variant for the upload list */
   listType?: UploadListType;
   /** Controlled file list */
   fileList?: UploadFile[];
}

export interface UploadItemProps {
   file: UploadFile;
   onRemove: (uid: string) => void;
}
