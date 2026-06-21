import { useEffect } from 'react';

function getCursorPos(e: MouseEvent, anchorEl: HTMLElement) {
   const a = anchorEl.getBoundingClientRect();
   // Accounts for scroll tracking natively
   let x = e.clientX - a.left;
   let y = e.clientY - a.top;
   return { x, y };
}

function moveLens(e: MouseEvent, anchorEl: HTMLElement, lensEl: HTMLElement) {
   let { x, y } = getCursorPos(e, anchorEl);

   // Prevent lens from going outside the horizontal container boundaries
   if (x > anchorEl.offsetWidth - lensEl.offsetWidth / 2) {
      x = anchorEl.offsetWidth - lensEl.offsetWidth / 2;
   }
   if (x - lensEl.offsetWidth / 2 < 0) {
      x = lensEl.offsetWidth / 2;
   }

   // FIXED: Swapped out .offsetWidth for .offsetHeight to ensure uniform vertical bounds
   if (y > anchorEl.offsetHeight - lensEl.offsetHeight / 2) {
      y = anchorEl.offsetHeight - lensEl.offsetHeight / 2;
   }
   if (y - lensEl.offsetHeight / 2 < 0) {
      y = lensEl.offsetHeight / 2;
   }

   /** Center cursor inside lensEl */
   x = x - lensEl.offsetWidth / 2;
   y = y - lensEl.offsetHeight / 2;

   lensEl.style.left = `${x}px`;
   lensEl.style.top = `${y}px`;

   return { x, y };
}

export function useMagnifier({
   boothEl,
   lensEl,
   imageEl,
   magnifiedImageEl,
}: {
   boothEl: HTMLElement | null;
   lensEl: HTMLElement | null;
   imageEl: HTMLElement | null;
   magnifiedImageEl: HTMLElement | null;
}) {
   useEffect(() => {
      if (!boothEl || !imageEl || !lensEl || !magnifiedImageEl) return;

      const handleMove = (e: MouseEvent) => {
         const zoom =
            Math.max(imageEl.offsetHeight, imageEl.offsetWidth) /
            lensEl.offsetWidth;
         const src = imageEl.getAttribute('src');

         const lensPos = moveLens(e, boothEl, lensEl);

         magnifiedImageEl.style.backgroundImage = `url(${src})`;
         magnifiedImageEl.style.backgroundSize = `${imageEl.offsetWidth * zoom}px ${imageEl.offsetHeight * zoom}px`;

         // Center dynamic math translations
         const offsetX =
            -lensPos.x * zoom +
            ((boothEl.offsetWidth - imageEl.offsetWidth) / 2) * zoom;
         const offsetY =
            -lensPos.y * zoom +
            ((boothEl.offsetHeight - imageEl.offsetHeight) / 2) * zoom;

         magnifiedImageEl.style.backgroundPosition = `${offsetX}px ${offsetY}px`;
         magnifiedImageEl.style.backgroundRepeat = 'no-repeat';
      };

      // Bind exclusively to the booth container element instead of the entire window
      boothEl.addEventListener('mousemove', handleMove);
      return () => boothEl.removeEventListener('mousemove', handleMove);
   }, [boothEl, lensEl, imageEl, magnifiedImageEl]);
}
