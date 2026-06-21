import { forwardRef, useId } from 'react';
import type { CheckboxProps } from './Checkbox.types';
import styles from './Checkbox.module.scss';
import clsx from 'clsx';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
   (props, ref) => {
      const {
         className,
         style,
         size = 'md',
         label,
         children,
         onChange,
         disabled,
         ...rest
      } = props;
      const id = useId();

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         onChange?.(e);
      };

      return (
         <label
            className={clsx(
               styles.checkbox,
               styles[size],
               {
                  [styles.disabled]: disabled,
               },
               className,
            )}
            style={style}
            htmlFor={id}
         >
            <input
               ref={ref}
               id={id}
               type="checkbox"
               disabled={disabled}
               className={styles.input}
               onChange={handleChange}
               {...rest}
            />
            <div className={styles.control} aria-hidden="true" />
            {(label || children) && (
               <span className={styles.label}>{label || children}</span>
            )}
         </label>
      );
   },
);

Checkbox.displayName = 'Checkbox';
