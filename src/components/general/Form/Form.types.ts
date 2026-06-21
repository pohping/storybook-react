import type { ComponentPropsWithoutRef, ReactNode } from 'react';

// Data types for a form field's value
export type Value = string | readonly string[] | number | null;

// Custom validation function that receives the entire form state
export type Callback = (values: Values) => string | undefined | null;

// Defines a validation rule for a form field
export type Constraint =
   | { pattern: RegExp; message: string }
   | { required: boolean; message: string }
   | Callback;

// A key-value map representing the current values of all fields in the form
export type Values = Record<string, Value>;

// A key-value map representing validation errors
export type Errors = Record<string, string> | null;

// The layout arrangement for form fields and their corresponding labels
export type Orientation = 'horizontal' | 'vertical';

// The internal tracking state for all registered form field
export type FormItemState = Record<
   string,
   {
      value: Value;
      error?: string | null;
      isFocus: boolean;
      isTouched: boolean;
      constraints: Constraint[];
   }
>;

export interface FormProps extends Omit<
   ComponentPropsWithoutRef<'form'>,
   'onSubmit' | 'onChange'
> {
   /** Callback triggered when the form is submitted */
   onSubmit?: (evt: { values: any; errors: Errors }) => void;
   /** Initial values to populate the form fields on mount */
   defaultValues?: Values;
   /** The form contents */
   children?: ReactNode;
   /** Global layout orientation for fields within this form */
   orientation?: Orientation;
   /** Callback triggered whenever any field value changes */
   onChange?: (values: Values) => void;
}

export interface FormItemProps extends ComponentPropsWithoutRef<'div'> {
   /** The text or element to display as the field's label */
   label?: ReactNode;
   /** The unique identifier key used to register this field in the form state */
   name?: string;
   /** The form control component */
   children: ReactNode;
   /** Validation rules specific to this field */
   constraints?: Constraint[];
}

export interface FormContextProps {
   /** Dynamically registers or updates validation rules for a specific field */
   updateConstraints: (name: string, constraints: Constraint[]) => void;
   /** Updates the value and touched state of a specific field */
   updateValue: (name: string, value: Value, touched?: boolean) => void;
   /** Retrieves the current value of a specific field */
   getValue: (name: string) => Value | undefined;
   /** Retrieves the current error message of a specific field */
   getError: (name: string) => string | null | undefined;
   /** Triggers validation imperatively for a single field */
   validateItem: (name: string) => void;
   /** The active layout orientation inherited from the parent Form */
   orientation: Orientation;
}

export interface FormItemContextProps {
   /** Call when the underlying input gains focus */
   focus: () => void;
   /** Call when the underlying input loses focus */
   blur: () => void;
   /** Updates the field value in the central form state */
   updateValue: (value: Value, touched?: boolean) => void;
   /** The unique generated HTML id for associating labels and inputs */
   id?: string;
   /** The field's registered state name */
   name?: string;
   /** Boolean flag indicating if the field currently has a validation error */
   error?: boolean;
   /** The current value synced from the form provider */
   value?: Value;
}

export interface FormRef {
   /** Programmatically triggers a form submission */
   requestSubmit: () => void;
}
