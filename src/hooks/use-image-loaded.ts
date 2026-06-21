import { useEffect, useState } from 'react';

export type ImageStatus = 'idle' | 'loading' | 'loaded' | 'error';

export function useImageLoaded(src?: string) {
   const [status, setStatus] = useState<ImageStatus>(src ? 'loading' : 'idle');

   useEffect(() => {
      if (!src) {
         setStatus('idle');
         return;
      }

      const img = new Image();
      img.src = src;

      const updateStatus = (s: ImageStatus) => setStatus(s);

      img.onload = () => updateStatus('loaded');
      img.onerror = () => updateStatus('error');

      return () => {
         img.onload = null;
         img.onerror = null;
      };
   }, [src]);

   return status;
}
