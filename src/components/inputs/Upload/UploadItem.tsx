import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Icon } from '@/components/data-display';
import type { UploadItemProps } from './Upload.types';
import styles from './Upload.module.scss';

export const UploadItem = ({ file, onRemove }: UploadItemProps) => {
   const [imageFailed, setImageFailed] = useState(false);
   const [previewUrl, setPreviewUrl] = useState<string | undefined>(file.url);

   useEffect(() => {
      // If we don't have a hardcoded URL but we do have a file blob, create an object URL
      if (!file.url && file.origin) {
         const objectUrl = URL.createObjectURL(file.origin);
         setPreviewUrl(objectUrl);

         // Memory cleanup: Release the object URL when the component unmounts
         return () => URL.revokeObjectURL(objectUrl);
      }
   }, [file.origin, file.url]);

   const fileName = file.name || file.origin?.name || 'Unknown file';

   return (
      <div className={clsx(styles.fileItem, { [styles.error]: file.error })}>
         <div className={styles.fileItemInner}>
            <div className={styles.preview}>
               {imageFailed || !previewUrl ? (
                  <Icon name="File" />
               ) : (
                  <img
                     src={previewUrl}
                     alt={fileName}
                     onError={() => setImageFailed(true)}
                  />
               )}
            </div>

            <div className={styles.fileInfo}>
               <div className={styles.fileName}>{fileName}</div>
               {file.error && (
                  <div className={styles.errorMessage}>
                     File exceeds size limit
                  </div>
               )}
            </div>

            <div className={styles.buttonWrapper}>
               <button
                  type="button"
                  className={styles.button}
                  onClick={() => file.uid && onRemove(file.uid)}
                  aria-label={`Remove ${fileName}`}
               >
                  <Icon name="Bin" />
               </button>
            </div>
         </div>
      </div>
   );
};
