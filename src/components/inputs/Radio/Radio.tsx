import { forwardRef, useContext } from 'react';
import type { RadioComponent, RadioProps, RadioRef } from './Radio.types';
import { RadioGroup } from './RadioGroup';
import { RadioGroupContext } from './Radio.context';
import styles from './Radio.module.scss';
import clsx from 'clsx';

export const Radio = forwardRef<RadioRef, RadioProps>(
   (
      {
         disabled,
         size = 'md',
         label,
         children,
         onChange,
         className,
         name,
         checked,
         defaultChecked,
         value,
         ...rest
      },
      ref,
   ) => {
      const groupCtx = useContext(RadioGroupContext);

      // Group context takes precedence over local checked state
      const isChecked =
         groupCtx && value !== undefined ? groupCtx.value === value : checked;

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         onChange?.(e);
         // If inside a group, push the value up to the group context
         if (groupCtx?.onChange && value !== undefined) {
            groupCtx.onChange(value as string | number);
         }
      };

      const effectiveSize = groupCtx?.size || size;
      const effectiveName = groupCtx?.name || name;

      return (
         <label
            ref={ref}
            className={clsx(
               styles.radio,
               styles[effectiveSize],
               { [styles.disabled]: disabled },
               className,
            )}
         >
            <input
               className={styles.input}
               type="radio"
               disabled={disabled}
               name={effectiveName}
               checked={isChecked}
               defaultChecked={defaultChecked}
               value={value}
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
) as RadioComponent;

Radio.Group = RadioGroup;
Radio.displayName = 'Radio';
