import {
   forwardRef,
   useState,
   useRef,
   useCallback,
   type FocusEvent,
   type ChangeEvent,
} from 'react';
import clsx from 'clsx';
import { useForm } from '@/components/general/Form';
import type {
   PasswordInputProps,
   PasswordInputRef,
} from './PasswordInput.types';
import styles from './PasswordInput.module.scss';
import { Icon } from '@/components/data-display';

export const PasswordInput = forwardRef<PasswordInputRef, PasswordInputProps>(
   (props, forwardedRef) => {
      const {
         size = 'md',
         error,
         success,
         disabled,
         placeholder = 'Enter password',
         className,
         onFocus,
         onChange,
         onBlur,
         ...rest
      } = props;
      const [isVisible, setIsVisible] = useState(false);
      const innerRef = useRef<HTMLInputElement>(null);
      const form = useForm();

      // Safely merge the forwarded ref with our internal ref
      const setRef = useCallback(
         (node: HTMLInputElement | null) => {
            innerRef.current = node;
            if (typeof forwardedRef === 'function') {
               forwardedRef(node);
            } else if (forwardedRef) {
               forwardedRef.current = node;
            }
         },
         [forwardedRef],
      );

      const hasError = !!error || !!form.error;

      const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
         onFocus?.(e);
         form.focus?.();
      };

      const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
         onBlur?.(e);
         form.blur?.();
      };

      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
         onChange?.(e);
         form.updateValue?.(e.target.value);
      };

      const toggleVisibility = () => {
         if (disabled) return;
         setIsVisible((prev) => !prev);
         // Ensure the input retains focus when the user clicks the eye icon
         if (innerRef.current) {
            innerRef.current.focus();
         }
      };

      return (
         <div
            className={clsx(
               styles.passwordInput,
               styles[size],
               {
                  [styles.error]: hasError,
                  [styles.success]: success && !hasError,
                  [styles.disabled]: disabled,
               },
               className,
            )}
         >
            <input
               ref={setRef}
               className={styles.input}
               type={isVisible ? 'text' : 'password'}
               placeholder={placeholder}
               disabled={disabled}
               onChange={handleChange}
               onFocus={handleFocus}
               onBlur={handleBlur}
               aria-invalid={hasError}
               {...rest}
            />
            <div className={styles.section}>
               {!disabled && (
                  <button
                     type="button"
                     // Prevent the button from stealing focus from the input on click
                     onMouseDown={(e) => e.preventDefault()}
                     className={styles.toggle}
                     onClick={toggleVisibility}
                     aria-label={isVisible ? 'Hide password' : 'Show password'}
                     title={isVisible ? 'Hide password' : 'Show password'}
                     tabIndex={-1}
                  >
                     <Icon name={isVisible ? 'EyeOpen' : 'EyeClosed'} />
                  </button>
               )}
            </div>
         </div>
      );
   },
);

PasswordInput.displayName = 'PasswordInput';
