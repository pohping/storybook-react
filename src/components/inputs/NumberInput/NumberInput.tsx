import { forwardRef, useRef, useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import { Icon } from '@/components/data-display/Icon';
import { useForm } from '@/components/general/Form';
import type { NumberInputProps, NumberInputRef } from './NumberInput.types';
import styles from './NumberInput.module.scss';

// Utility to safely parse values
const parseValue = (val: any): number | null => {
   if (val === '' || val === null || val === undefined) return null;
   const parsed = typeof val === 'string' ? parseFloat(val) : val;
   return isNaN(parsed) ? null : parsed;
};

export const NumberInput = forwardRef<NumberInputRef, NumberInputProps>(
   (props, ref) => {
      const {
         size = 'md',
         min,
         max,
         step = 1,
         value,
         defaultValue,
         onChange,
         placeholder = 'Number',
         error,
         controls = true,
         disabled,
         className,
         formatter,
         parser,
         ...rest
      } = props;
      const inputRef = useRef<HTMLInputElement>(null);
      const isControlled = value !== undefined;
      const form = useForm(); // Form context integration

      // Determine initial value prioritizing: controlled -> form context -> uncontrolled default -> empty
      const initialValue = parseValue(
         isControlled ? value : (form.value ?? defaultValue),
      );

      const [internalValue, setInternalValue] = useState<number | null>(
         initialValue,
      );
      const [inputValue, setInputValue] = useState<string>(
         initialValue !== null
            ? formatter
               ? formatter(initialValue)
               : String(initialValue)
            : '',
      );

      // Keep internal state in sync with external controlled value
      useEffect(() => {
         if (isControlled) {
            const parsed = parseValue(value);
            setInternalValue(parsed);
            if (document.activeElement !== inputRef.current) {
               setInputValue(
                  parsed !== null
                     ? formatter
                        ? formatter(parsed)
                        : String(parsed)
                     : '',
               );
            }
         }
      }, [value, isControlled, formatter]);

      // Clamp value safely between min and max
      const clamp = useCallback(
         (val: number) => {
            let next = val;
            if (min !== undefined) next = Math.max(next, min);
            if (max !== undefined) next = Math.min(next, max);
            return next;
         },
         [min, max],
      );

      const commit = useCallback(
         (valStr: string) => {
            let parsed = parser ? parser(valStr) : parseValue(valStr);

            if (parsed !== null) {
               parsed = clamp(parsed);
            }

            // Update local states
            if (!isControlled) {
               setInternalValue(parsed);
            }

            // Format the display value (only if we aren't actively typing a raw number)
            setInputValue(
               parsed !== null
                  ? formatter
                     ? formatter(parsed)
                     : String(parsed)
                  : '',
            );

            // Fire external handlers
            onChange?.(parsed);
            form.updateValue(parsed);
            form.blur();
         },
         [clamp, form, isControlled, onChange, formatter, parser],
      );

      const handleStep =
         (delta: number) => (e?: React.MouseEvent | React.KeyboardEvent) => {
            e?.preventDefault();
            if (disabled) return;

            const current = internalValue ?? 0;
            const next = clamp(current + delta * step);

            // Immediately set value when stepping
            setInputValue(formatter ? formatter(next) : String(next));

            if (!isControlled) setInternalValue(next);
            onChange?.(next);
            form.updateValue(next);

            // Ensure input retains focus if clicked
            inputRef.current?.focus();
         };

      const handleWheel = (e: React.WheelEvent) => {
         if (!inputRef.current?.contains(document.activeElement) || disabled)
            return;
         e.preventDefault();
         handleStep(e.deltaY > 0 ? -1 : 1)();
      };

      const handleKeyDown = (e: React.KeyboardEvent) => {
         if (disabled) return;
         if (e.key === 'ArrowUp') handleStep(1)(e);
         if (e.key === 'ArrowDown') handleStep(-1)(e);
         if (e.key === 'Enter') commit(inputValue);
      };

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         setInputValue(e.target.value); // Allow free typing
      };

      return (
         <div
            ref={ref}
            className={clsx(
               styles.numberInput,
               styles[size],
               {
                  [styles.disabled]: disabled,
                  [styles.error]: error || form.error,
               },
               className,
            )}
            onWheel={handleWheel}
         >
            <input
               ref={inputRef}
               className={styles.input}
               type="text"
               inputMode="numeric"
               value={inputValue}
               onChange={handleChange}
               onKeyDown={handleKeyDown}
               onFocus={() => form.focus()}
               onBlur={() => commit(inputValue)}
               placeholder={placeholder}
               disabled={disabled}
               aria-valuemin={min}
               aria-valuemax={max}
               aria-valuenow={internalValue ?? undefined}
               role="spinbutton"
               {...rest}
            />

            {controls && (
               <div className={styles.section}>
                  <button
                     type="button"
                     className={styles.control}
                     onMouseDown={(e) => e.preventDefault()}
                     onClick={handleStep(1)}
                     disabled={
                        disabled ||
                        (max !== undefined &&
                           internalValue !== null &&
                           internalValue >= max)
                     }
                     aria-label="Increment"
                  >
                     <Icon name="CaretUp" />
                  </button>
                  <button
                     type="button"
                     className={styles.control}
                     onMouseDown={(e) => e.preventDefault()}
                     onClick={handleStep(-1)}
                     disabled={
                        disabled ||
                        (min !== undefined &&
                           internalValue !== null &&
                           internalValue <= min)
                     }
                     aria-label="Decrement"
                  >
                     <Icon name="CaretDown" />
                  </button>
               </div>
            )}
         </div>
      );
   },
);

NumberInput.displayName = 'NumberInput';
