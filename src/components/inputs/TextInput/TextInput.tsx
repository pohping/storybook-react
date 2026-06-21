import {
   forwardRef,
   type ChangeEvent,
   type FocusEvent,
   type InputHTMLAttributes,
} from 'react';
import { useForm } from '@/components/general';
import type { TextInputProps, TextInputRef } from './TextInput.types';
import styles from './TextInput.module.scss';
import clsx from 'clsx';

export const TextInput = forwardRef<TextInputRef, TextInputProps>(
   (props, ref) => {
      const {
         size = 'md',
         error = false,
         disabled = false,
         onFocus,
         onBlur,
         onChange,
         id,
         name,
         value,
         placeholder,
         className,
         ...rest
      } = props;
      const form = useForm();

      // Hierarchy: Explicit Prop > Form Context Value > Uncontrolled Empty String
      const resolvedValue = (value ||
         form.value) as InputHTMLAttributes<'input'>['value'];
      const resolvedId = id || form.id;
      const resolvedName = name || form.name;
      const hasError = error || !!form.error;

      const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
         onFocus?.(e);
         form.focus?.();
      };

      const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
         onBlur?.(e);
         form.blur?.();
      };

      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
         //  console.log({ isControlled, value });
         onChange?.(e);
         form.updateValue?.(e.target.value);
      };

      return (
         <input
            ref={ref}
            id={resolvedId}
            name={resolvedName}
            value={resolvedValue}
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            disabled={disabled}
            className={clsx(
               styles.input,
               styles[size],
               {
                  [styles.error]: hasError,
                  [styles.disabled]: disabled,
               },
               className,
            )}
            {...rest}
         />
      );
   },
);

TextInput.displayName = 'TextInput';
