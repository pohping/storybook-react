import {
   type KeyboardEvent,
   Children,
   useEffect,
   useLayoutEffect,
   useRef,
   useState,
   forwardRef,
} from 'react';
import styles from './Carousel.module.scss';
import clsx from 'clsx';
import { toCssUnit } from '@/utils';
import type { CarouselProps } from './Carousel.types';
import { Icon } from '@/components/data-display';

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
   (props, ref) => {
      const {
         children,
         height,
         style,
         className,
         autoPlayInterval = 2000,
         ...rest
      } = props;

      const [currentSlide, setCurrentSlide] = useState(0);
      const [isPaused, setIsPaused] = useState(false);
      const totalChildRef = useRef(0);

      useLayoutEffect(() => {
         totalChildRef.current = Children.count(children);
      }, [children]);

      useEffect(() => {
         if (autoPlayInterval === false || isPaused) return;

         const interval = setInterval(() => {
            setCurrentSlide(
               (currentSlide) => (currentSlide + 1) % totalChildRef.current,
            );
         }, autoPlayInterval);

         return () => clearInterval(interval);
      }, [autoPlayInterval, isPaused]);

      const goToPrevious = () => {
         setCurrentSlide(
            (currentSlide) =>
               (currentSlide - 1 + totalChildRef.current) %
               totalChildRef.current,
         );
      };

      const goToNext = () => {
         setCurrentSlide(
            (currentSlide) => (currentSlide + 1) % totalChildRef.current,
         );
      };

      const handleKeyDown = (e: KeyboardEvent) => {
         if (e.key === 'ArrowLeft') {
            goToPrevious();
         } else if (e.key === 'ArrowRight') {
            goToNext();
         }
      };

      const rootStyle = {
         '--carousel-height': toCssUnit(height),
         '--carousel-slide': currentSlide,
         ...styles,
      } as React.CSSProperties;

      return (
         <div
            ref={ref}
            className={clsx(styles.carousel, className)}
            tabIndex={0}
            style={rootStyle}
            data-testid="carousel-container"
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            {...rest}
         >
            <button
               className={clsx(styles.arrow, styles.left)}
               onClick={goToPrevious}
               aria-label="Previous slide"
            >
               <Icon name="ArrowLeft" />
            </button>
            <div className={styles.list}>{children}</div>
            <button
               className={clsx(styles.arrow, styles.right)}
               onClick={goToNext}
               aria-label="Next slide"
            >
               <Icon name="ArrowRight" />
            </button>
            <ul className={styles.nav}>
               {Array.from({ length: totalChildRef.current }).map((_, i) => (
                  <li
                     key={i}
                     className={clsx(styles.bullet, {
                        [styles.active]: currentSlide === i,
                     })}
                     role="listitem"
                     onClick={() => setCurrentSlide(i)}
                  />
               ))}
            </ul>
         </div>
      );
   },
);

Carousel.displayName = 'Carousel';

// <Button
//    className={clsx(styles.arrow, styles.left)}
//    variant="text"
//    icon={<Icon name="ArrowLeft" />}
//    onClick={goToPrevious}
//    aria-label="Previous slide"
// />
// <div className={styles.list}>{children}</div>
// <Button
//    className={clsx(styles.arrow, styles.right)}
//    variant="text"
//    icon={<Icon name="ArrowRight" />}
//    onClick={goToNext}
//    aria-label="Next slide"
// />
