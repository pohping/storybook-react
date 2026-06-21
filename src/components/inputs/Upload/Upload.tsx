import { forwardRef, useCallback, useRef, useState } from 'react';
import type { UploadFile, UploadProps } from './Upload.types';
import { UploadItem } from './UploadItem';
import styles from './Upload.module.scss';
import clsx from 'clsx';

export const Upload = forwardRef<HTMLDivElement, UploadProps>((props, ref) => {
   const {
      className,
      children,
      multiple,
      disabled,
      accept,
      listType = 'text',
      showUploadList = true,
      fileList,
      maxFileSizeMB = 5,
      onChange,
      ...rest
   } = props;
   const inputRef = useRef<HTMLInputElement>(null);
   const [internalFileList, setInternalFileList] = useState<UploadFile[]>([]);

   const isControlled = fileList !== undefined;
   const currentFiles = isControlled ? fileList : internalFileList;

   const validateFile = (file: File): UploadFile => ({
      uid: crypto.randomUUID(), // Guarantee a stable key for React
      name: file.name,
      origin: file,
      error: file.size > maxFileSizeMB * 1024 * 1024,
   });

   const processFiles = (newFiles: FileList | null) => {
      if (!newFiles) return;

      const validated = Array.from(newFiles).map(validateFile);
      const updated = multiple
         ? [...currentFiles, ...validated]
         : validated.slice(0, 1);

      if (!isControlled) setInternalFileList(updated);
      onChange?.(updated);
   };

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      processFiles(e.target.files);
      if (e.target) e.target.value = ''; // Reset input to allow selecting the same file again
   };

   const handleTrigger = useCallback(() => {
      if (!disabled) inputRef.current?.click();
   }, [disabled]);

   const handleFileRemove = (uidToRemove: string) => {
      console.log({ uidToRemove, currentFiles });
      const updated = currentFiles.filter((item) => item.uid !== uidToRemove);
      onChange?.(updated);
      if (!isControlled) setInternalFileList(updated);
   };

   const isPicture = listType.startsWith('picture');
   const isCircle = listType.endsWith('circle');

   console.log(currentFiles);

   return (
      <div
         ref={ref}
         className={clsx(
            styles.upload,
            {
               [styles.picture]: isPicture,
               [styles.circle]: isCircle,
               [styles.disabled]: disabled,
            },
            className,
         )}
         {...rest}
      >
         <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={handleInputChange}
            hidden
         />
         <div
            role="button"
            tabIndex={disabled ? -1 : 0}
            className={styles.trigger}
            onClick={handleTrigger}
            onKeyDown={(e) => {
               if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleTrigger();
               }
            }}
         >
            {children}
         </div>

         {showUploadList && currentFiles.length > 0 && (
            <div className={styles.list}>
               {currentFiles.map((item) => (
                  <UploadItem
                     key={item.uid}
                     file={item}
                     onRemove={handleFileRemove}
                  />
               ))}
            </div>
         )}
      </div>
   );
});

Upload.displayName = 'Upload';
