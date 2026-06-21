import type {
   ComponentPropsWithoutRef,
   ForwardRefExoticComponent,
   RefAttributes,
   ReactNode,
} from 'react';
import type { RadioGroup } from './RadioGroup';

/** Visual sizing options applied to the radio button */
export type RadioSize = 'sm' | 'md' | 'lg';

/** Valid data types allowed for the raw value of a radio selection */
export type RadioValue = string | number;

/** The layout distribution of radio options within a group */
export type RadioOrientation = 'horizontal' | 'vertical';

export interface RadioProps extends Omit<
   ComponentPropsWithoutRef<'input'>,
   'size'
> {
   /** Size variant of the radio input */
   size?: RadioSize;
   /** Text label to display next to the radio button */
   label?: ReactNode;
}

export interface RadioGroupProps extends Omit<
   ComponentPropsWithoutRef<'div'>,
   'onChange'
> {
   /** The name atrribute applied to all child inputs */
   name?: string;
   /** Global size variant applied to all child components */
   size?: RadioSize;
   /** Controlled value of the currently selected radio button */
   value?: RadioValue | null;
   /** The initially selected radio value for uncontrolled setups */
   defaultValue?: RadioValue;
   /** The layout distribution for organizing the radio button */
   orientation?: RadioOrientation;
   /** Globally disables all nested radio fields */
   disabled?: boolean;
   /** Callback fired when a new radio option is selected */
   onChange?: (value: RadioValue) => void;
}

export type RadioRef = HTMLLabelElement;
export type RadioGroupRef = HTMLDivElement;

export type RadioComponent = ForwardRefExoticComponent<
   RadioProps & RefAttributes<RadioRef>
> & {
   Group: typeof RadioGroup;
};

export interface RadioGroupContextValue {
   /** Inherited form name attribute */
   name?: string;
   /** Inherited sizing layout rules */
   size?: RadioSize;
   /** Current active value across the managed sub-group */
   value?: RadioValue | null;
   /** Trigger function piped through to update the root selection state */
   onChange?: (value: RadioValue) => void;
}
