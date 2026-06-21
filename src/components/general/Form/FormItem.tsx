import { useContext, useEffect, useState, useId, forwardRef } from 'react';
import type { FormItemProps, Value } from './Form.types';
import { FormContext, FormItemContext } from './Form.context';
import { isRequiredConstraint } from './utils/form-utils';
import styles from './Form.module.scss';
import clsx from 'clsx';

export const FormItem = forwardRef<HTMLDivElement, FormItemProps>(
   ({ children, label, name, constraints, className, ...rest }, ref) => {
      const formCtx = useContext(FormContext);
      const id = useId();

      const [isFocus, setIsFocus] = useState(false);
      const [isTouched, setIsTouched] = useState(false);

      useEffect(() => {
         if (name && constraints) {
            formCtx?.updateConstraints(name, constraints);
         }
      }, [constraints, name]);

      useEffect(() => {
         if (constraints && name && isTouched && !isFocus) {
            formCtx?.validateItem(name);
         }
      }, [isFocus, isTouched, name, constraints]);

      const focus = () => setIsFocus(true);
      const blur = () => setIsFocus(false);

      const updateValue = (value: Value, touched = true) => {
         if (touched) setIsTouched(true);
         if (name) {
            formCtx?.updateValue(name, value, touched);
         }
      };

      const isRequired = constraints?.some(isRequiredConstraint) ?? false;
      const errorMsg = name ? formCtx?.getError(name) : null;
      const hasError = Boolean(!isFocus && errorMsg);
      const currentValue = name ? formCtx?.getValue(name) : undefined;

      return (
         <FormItemContext.Provider
            value={{
               focus,
               blur,
               updateValue,
               id,
               name,
               error: hasError,
               value: currentValue,
            }}
         >
            <div
               ref={ref}
               className={clsx(
                  styles.item,
                  hasError && styles.error,
                  className,
               )}
               {...rest}
            >
               {label && (
                  <label
                     htmlFor={id}
                     className={clsx(
                        styles.label,
                        isRequired && styles.required,
                     )}
                  >
                     {label}
                  </label>
               )}
               <div className={styles.control}>
                  <div className={styles.input}>{children}</div>
                  <div className={styles.errorMsg} aria-live="polite">
                     {hasError ? errorMsg : ''}
                  </div>
               </div>
            </div>
         </FormItemContext.Provider>
      );
   },
);

FormItem.displayName = 'FormItem';
