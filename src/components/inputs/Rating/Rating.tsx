import { forwardRef, useState } from 'react';
import { Icon } from '@/components/data-display';
import { useForm } from '@/components/general';
import type { RatingProps, RatingRef } from './Rating.types';
import styles from './Rating.module.scss';
import clsx from 'clsx';

export const Rating = forwardRef<RatingRef, RatingProps>((props, ref) => {
   const {
      value,
      defaultValue = 0,
      count = 5,
      allowHalf = false,
      readOnly = false,
      size = 'md',
      label,
      onChange,
      onHoverChange,
      className,
      ...rest
   } = props;
   const form = useForm();
   const isControlled = value !== undefined;

   const [internalValue, setInternalValue] = useState(defaultValue);
   const [hoverValue, setHoverValue] = useState(0);

   // Value hierarchy: Controlled -> Form Context -> Internal State
   const resolvedValue = (
      isControlled ? value : (form.value ?? internalValue)
   ) as number;

   // If hovering, show the hover preview. Otherwise, show the actual resolved rating.
   const displayValue = hoverValue > 0 ? hoverValue : resolvedValue;

   const getStarValue = (
      e: React.MouseEvent<HTMLButtonElement>,
      index: number,
   ) => {
      if (!allowHalf) return index + 1;

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percent = x / rect.width;

      return index + (percent < 0.5 ? 0.5 : 1);
   };

   const handleClick = (
      e: React.MouseEvent<HTMLButtonElement>,
      index: number,
   ) => {
      if (readOnly) return;

      const newValue = getStarValue(e, index);
      if (!isControlled) setInternalValue(newValue);

      onChange?.(newValue);
      form.updateValue?.(newValue);
      form.blur?.(); // Signal touch/interaction for form validation
   };

   const handleMouseMove = (
      e: React.MouseEvent<HTMLButtonElement>,
      index: number,
   ) => {
      if (readOnly) return;
      const newValue = getStarValue(e, index);
      setHoverValue(newValue);
      onHoverChange?.(newValue);
   };

   const handleMouseLeave = () => {
      if (readOnly) return;
      setHoverValue(0);
      onHoverChange?.(0);
   };

   const getFillPercent = (starIndex: number) => {
      const diff = displayValue - starIndex + 1;
      if (diff >= 1) return 100;
      if (diff > 0) return diff * 100;
      return 0;
   };

   return (
      <div
         ref={ref}
         className={clsx(
            styles.rating,
            styles[size],
            { [styles.readOnly]: readOnly },
            className,
         )}
         {...rest}
      >
         <div
            className={styles.stars}
            onMouseLeave={handleMouseLeave}
            role="radiogroup"
            aria-label={`Rating ${resolvedValue} out of ${count}`}
         >
            {Array.from({ length: count }, (_, i) => {
               const starIndex = i + 1;
               const isChecked = resolvedValue >= starIndex;

               return (
                  <button
                     key={starIndex}
                     type="button"
                     role="radio"
                     aria-checked={isChecked}
                     aria-label={`Rate ${starIndex} stars`}
                     disabled={readOnly}
                     className={styles.button}
                     onClick={(e) => handleClick(e, i)}
                     onMouseMove={(e) => handleMouseMove(e, i)}
                  >
                     <Icon className={styles.star} name="Star" />
                     <div
                        className={styles.starOverlay}
                        style={{ width: `${getFillPercent(starIndex)}%` }}
                     >
                        <Icon className={styles.star} name="Star" />
                     </div>
                  </button>
               );
            })}
         </div>
         {label && <div className={styles.label}>{label}</div>}
      </div>
   );
});

Rating.displayName = 'Rating';
