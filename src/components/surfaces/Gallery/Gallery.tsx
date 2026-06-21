import React, { useState, type MouseEvent } from 'react';
import clsx from 'clsx';
import { offset, useFloating } from '@floating-ui/react';
import { toCssUnit } from '@/utils';
import { useEventListener } from '@/hooks';
import { Icon } from '@/components/data-display';
import { Portal } from '@/components/layout';
import type { GalleryProps } from './Gallery.types';
import { useMagnifier } from './hooks/use-magnifier';
import styles from './Gallery.module.scss';

export const Gallery: React.FC<GalleryProps> = ({
   sources = [],
   thumbnailShow = 5,
   style,
   ...rest
}) => {
   const [selectedIndex, setSelectedIndex] = useState(0);
   const [lensEl, setLensEl] = useState<HTMLDivElement | null>(null);
   const [imageEl, setImageEl] = useState<HTMLImageElement | null>(null);

   // Handle mounting states with conditional tracking active visibility
   const [isHovered, setIsHovered] = useState(false);

   const { refs, floatingStyles } = useFloating<HTMLDivElement>({
      placement: 'right-start',
      middleware: [offset(16)],
   });

   useMagnifier({
      boothEl: refs.domReference.current,
      lensEl,
      imageEl,
      magnifiedImageEl: refs.floating.current,
   });

   useEventListener('scroll', () => {
      refs.setReference(null);
      setIsHovered(false);
   });

   const handleBoothMouseEnter = ({
      currentTarget,
   }: MouseEvent<HTMLDivElement>) => {
      refs.setReference(currentTarget);
      setIsHovered(true);
   };

   const handleBoothMouseLeave = () => {
      refs.setReference(null);
      setIsHovered(false);
   };

   const handlePrevClick = () => {
      if (selectedIndex > 0) setSelectedIndex((prev) => prev - 1);
   };

   const handleNextClick = () => {
      if (selectedIndex < sources.length - 1)
         setSelectedIndex((prev) => prev + 1);
   };

   const rootStyle = {
      '--gallery-booth-height': toCssUnit(
         refs.domReference.current?.clientHeight,
      ),
      '--gallery-booth-width': toCssUnit(
         refs.domReference.current?.clientWidth,
      ),
      '--gallery-thumbnail-cursor': Math.max(
         0,
         selectedIndex - thumbnailShow + 1,
      ),
      '--gallery-thumbnail-show': thumbnailShow, // Passed token to drop dependency on static 20%
      ...style,
   } as React.CSSProperties;

   return (
      <div className={styles.gallery} style={rootStyle} {...rest}>
         <div
            className={styles.booth}
            onMouseEnter={handleBoothMouseEnter}
            onMouseLeave={handleBoothMouseLeave}
         >
            {/* Show lens helper only when actively hovered over the container */}
            <div
               className={clsx(styles.lens, { [styles.visible]: isHovered })}
               ref={setLensEl}
            />
            <img
               className={styles.boothImage}
               ref={setImageEl}
               src={sources[selectedIndex].original}
               alt={`Selected gallery snapshot ${selectedIndex + 1}`}
            />
         </div>

         <div className={styles.thumbnailsContainer}>
            <div className={styles.thumbnailsWrapper}>
               <div
                  className={clsx(styles.arrow, styles.left, {
                     [styles.disabled]: selectedIndex === 0,
                  })}
                  onClick={handlePrevClick}
               >
                  <Icon name="ArrowLeft" />
               </div>

               <div className={styles.thumbnails}>
                  {sources.map((source, idx) => (
                     <div
                        key={idx}
                        className={clsx(styles.thumbnail, {
                           [styles.active]: selectedIndex === idx,
                        })}
                        onClick={() => setSelectedIndex(idx)}
                     >
                        <div
                           className={styles.thumbnailImage}
                           style={{
                              backgroundImage: `url(${source.thumbnail})`,
                           }}
                        />
                     </div>
                  ))}
               </div>

               <div
                  className={clsx(styles.arrow, styles.right, {
                     [styles.disabled]: selectedIndex >= sources.length - 1,
                  })}
                  onClick={handleNextClick}
               >
                  <Icon name="ArrowRight" />
               </div>
            </div>
         </div>

         {/* Render external magnifier box cleanly without placeholder nested elements */}
         <Portal open={isHovered && Boolean(refs.domReference.current)}>
            <div
               ref={refs.setFloating}
               className={styles.magnified}
               style={{ ...rootStyle, ...floatingStyles }}
            />
         </Portal>
      </div>
   );
};
