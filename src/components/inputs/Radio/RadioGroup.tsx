import { forwardRef, useState } from 'react';
import { useForm } from '@/components/general';
import { RadioGroupContext } from './Radio.context';
import type { RadioGroupProps, RadioGroupRef, RadioValue } from './Radio.types';
import styles from './Radio.module.scss';
import clsx from 'clsx';

export const RadioGroup = forwardRef<RadioGroupRef, RadioGroupProps>(
   (props, ref) => {
      const {
         children,
         name,
         value,
         defaultValue,
         disabled,
         onChange,
         orientation = 'horizontal',
         size = 'md',
         className,
         ...rest
      } = props;
      const form = useForm();
      const isControlled = value !== undefined;

      const [internalValue, setInternalValue] = useState<
         RadioValue | undefined
      >(defaultValue);

      // Hierarchy: Controlled value > Form Context Value > Internal Default
      const currentValue = isControlled
         ? value
         : ((form.value as RadioValue) ?? internalValue);

      const handleChange = (newValue: RadioValue) => {
         onChange?.(newValue);
         if (!isControlled) {
            setInternalValue(newValue);
         }
         form.focus?.();
         form.updateValue?.(newValue);
      };

      return (
         <RadioGroupContext.Provider
            value={{
               size,
               name: name || form.name,
               value: currentValue ?? null,
               onChange: handleChange,
            }}
         >
            <div
               ref={ref}
               role="radiogroup"
               className={clsx(styles.group, styles[orientation], className)}
               {...rest}
            >
               {children}
            </div>
         </RadioGroupContext.Provider>
      );
   },
);

RadioGroup.displayName = 'RadioGroup';
