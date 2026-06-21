import React, {
   useState,
   useEffect,
   useRef,
   useImperativeHandle,
   useCallback,
} from 'react';
import type {
   Constraint,
   FormItemState,
   FormProps,
   FormRef,
   Value,
} from './Form.types';
import { FormItem } from './FormItem';
import { FormContext } from './Form.context';
import { validateConstraint } from './utils/form-utils';
import styles from './Form.module.scss';
import clsx from 'clsx';

const FormRoot = React.forwardRef<FormRef, FormProps>((props, ref) => {
   const {
      children,
      onSubmit,
      orientation = 'vertical',
      defaultValues,
      onChange,
      className,
      ...rest
   } = props;

   const [itemState, setItemState] = useState<FormItemState>({});
   const formRef = useRef<HTMLFormElement>(null);

   // Expose imperative handle for external submissions
   useImperativeHandle(ref, () => ({
      requestSubmit: () => {
         formRef.current?.requestSubmit();
      },
   }));

   // Initialize default values
   useEffect(() => {
      if (!defaultValues) return;

      setItemState((prev) => {
         const nextState = { ...prev };
         Object.keys(defaultValues).forEach((key) => {
            if (!nextState[key]) {
               nextState[key] = {
                  value: defaultValues[key],
                  error: null,
                  isFocus: false,
                  isTouched: false,
                  constraints: [],
               };
            }
         });
         return nextState;
      });
   }, [defaultValues]);

   // Fire onChange when form state updates
   useEffect(() => {
      if (onChange) {
         const currentValues = Object.fromEntries(
            Object.entries(itemState).map(([k, v]) => [k, v.value]),
         );
         onChange(currentValues);
      }
   }, [itemState, onChange]);

   const updateConstraints = useCallback(
      (name: string, constraints: Constraint[]) => {
         setItemState((prev) => ({
            ...prev,
            [name]: {
               ...(prev[name] ?? {
                  value: null,
                  isFocus: false,
                  isTouched: false,
               }),
               constraints,
            },
         }));
      },
      [],
   );

   const updateValue = useCallback(
      (name: string, value: Value, touched = true) => {
         setItemState((prev) => {
            const field = prev[name];
            return {
               ...prev,
               [name]: {
                  ...field,
                  value,
                  isTouched: field?.isTouched || touched,
                  // Clear error as the user types
                  error: touched ? null : field?.error,
               },
            };
         });
      },
      [],
   );

   const getValue = useCallback(
      (name: string) => itemState[name]?.value,
      [itemState],
   );
   const getError = useCallback(
      (name: string) => itemState[name]?.error,
      [itemState],
   );

   const validateItem = useCallback(
      (name: string) => {
         const values = Object.fromEntries(
            Object.entries(itemState).map(([k, v]) => [k, v.value]),
         );
         const field = itemState[name];
         if (!field) return;

         const error = validateConstraint(name, values, field.constraints);

         setItemState((prev) => ({
            ...prev,
            [name]: { ...prev[name], error, isTouched: true },
         }));
      },
      [itemState],
   );

   const handleFormSubmit = (e: React.SubmitEvent) => {
      e.preventDefault();

      const values = Object.fromEntries(
         Object.entries(itemState).map(([k, v]) => [k, v.value]),
      );
      const errors: Record<string, string> = {};

      const updatedItemState = Object.fromEntries(
         Object.entries(itemState).map(([name, field]) => {
            const errorMsg = validateConstraint(
               name,
               values,
               field.constraints,
            );
            if (errorMsg) errors[name] = errorMsg;

            return [
               name,
               {
                  ...field,
                  error: errorMsg,
                  isTouched: true,
               },
            ];
         }),
      );

      setItemState(updatedItemState);

      onSubmit?.({
         values,
         errors: Object.keys(errors).length === 0 ? null : errors,
      });
   };

   return (
      <FormContext.Provider
         value={{
            updateConstraints,
            updateValue,
            getError,
            getValue,
            orientation,
            validateItem,
         }}
      >
         <form
            ref={formRef} // Attach the forwarded native ref here
            className={clsx(styles.form, styles[orientation], className)}
            onSubmit={handleFormSubmit}
            {...rest} // Forward standard HTML attributes
         >
            {children}
         </form>
      </FormContext.Provider>
   );
});

FormRoot.displayName = 'Form';

export const Form = Object.assign(FormRoot, {
   Item: FormItem,
});

// import React, {
//    useEffect,
//    useImperativeHandle,
//    useRef,
//    useState,
//    useCallback,
//    type SubmitEvent,
// } from 'react';
// import type {
//    FormItemState,
//    FormProps,
//    FormRef,
//    Constraint,
//    Value,
// } from './Form.types';
// import { FormItem } from './FormItem';
// import { FormContext } from './Form.context';
// import { validateConstraint } from './utils';
// import styles from './Form.module.scss';
// import clsx from 'clsx';

// const FormRoot = React.forwardRef<FormRef, FormProps>((props, ref) => {
//    const {
//       children,
//       onSubmit,
//       orientation = 'vertical',
//       defaultValues,
//       onChange,
//       className,
//    } = props;
//    const [itemState, setItemState] = useState<FormItemState>({});
//    const formRef = useRef<HTMLFormElement>(null);

//    // Expose imperative handle for external submissions
//    useImperativeHandle(ref, () => ({
//       requestSubmit: () => {
//          formRef.current?.requestSubmit();
//       },
//    }));

//    // Initialize default values
//    useEffect(() => {
//       if (!defaultValues) return;

//       setItemState((prev) => {
//          const nextState = { ...prev };
//          Object.keys(defaultValues).forEach((key) => {
//             if (!nextState[key]) {
//                nextState[key] = {
//                   value: defaultValues[key],
//                   error: null,
//                   isFocus: false,
//                   isTouched: false,
//                   constraints: [],
//                };
//             }
//          });
//          return nextState;
//       });
//    }, [defaultValues]);

//    // Fire onChange when form state updates
//    useEffect(() => {
//       if (onChange) {
//          const currentValues = Object.fromEntries(
//             Object.entries(itemState).map(([k, v]) => [k, v.value]),
//          );
//          onChange(currentValues);
//       }
//    }, [itemState, onChange]);

//    const updateConstraints = useCallback(
//       (name: string, constraints: Constraint[]) => {
//          setItemState((prev) => ({
//             ...prev,
//             [name]: {
//                ...(prev[name] ?? {
//                   value: null,
//                   isFocus: false,
//                   isTouched: false,
//                }),
//                constraints,
//             },
//          }));
//       },
//       [],
//    );

//    const updateValue = useCallback(
//       (name: string, value: Value, touched = true) => {
//          setItemState((prev) => {
//             const field = prev[name];
//             return {
//                ...prev,
//                [name]: {
//                   ...field,
//                   value,
//                   isTouched: field?.isTouched || touched,
//                   // Clear error as the user types
//                   error: touched ? null : field?.error,
//                },
//             };
//          });
//       },
//       [],
//    );

//    const getValue = useCallback(
//       (name: string) => itemState[name]?.value,
//       [itemState],
//    );
//    const getError = useCallback(
//       (name: string) => itemState[name]?.error,
//       [itemState],
//    );

//    const validateItem = useCallback(
//       (name: string) => {
//          const values = Object.fromEntries(
//             Object.entries(itemState).map(([k, v]) => [k, v.value]),
//          );
//          const field = itemState[name];
//          if (!field) return;

//          const error = validateConstraint(name, values, field.constraints);

//          setItemState((prev) => ({
//             ...prev,
//             [name]: { ...prev[name], error, isTouched: true },
//          }));
//       },
//       [itemState],
//    );

//    const handleFormSubmit = (e: SubmitEvent) => {
//       e.preventDefault();

//       const values = Object.fromEntries(
//          Object.entries(itemState).map(([k, v]) => [k, v.value]),
//       );
//       const errors: Record<string, string> = {};

//       const updatedItemState = Object.fromEntries(
//          Object.entries(itemState).map(([name, field]) => {
//             const errorMsg = validateConstraint(
//                name,
//                values,
//                field.constraints,
//             );
//             if (errorMsg) errors[name] = errorMsg;

//             return [
//                name,
//                {
//                   ...field,
//                   error: errorMsg,
//                   isTouched: true, // Mark all fields as touched on submit
//                },
//             ];
//          }),
//       );

//       setItemState(updatedItemState);

//       onSubmit?.({
//          values,
//          errors: Object.keys(errors).length === 0 ? null : errors,
//       });
//    };

//    return (
//       <FormContext.Provider
//          value={{
//             updateConstraints,
//             updateValue,
//             getError,
//             getValue,
//             orientation,
//             validateItem,
//          }}
//       >
//          <form
//             ref={formRef}
//             className={clsx(styles.form, styles[orientation], className)}
//             onSubmit={handleFormSubmit}
//          >
//             {children}
//          </form>
//       </FormContext.Provider>
//    );
// });

// FormRoot.displayName = 'Form';

// export const Form = Object.assign(FormRoot, {
//    Item: FormItem,
// });
