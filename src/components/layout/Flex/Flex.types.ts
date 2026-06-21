import type { ComponentPropsWithoutRef } from 'react';

/** Defining the direction flex items are placed in the container */
export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

/** Controls whether the flex container forces items into a single line or allows them to wrap onto multiple lines */
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

/** Defines how space is distributed between and around flex items along the main-axis */
export type FlexJustify =
   | 'flex-start'
   | 'flex-end'
   | 'center'
   | 'space-between'
   | 'space-around'
   | 'space-evenly';

/** Defines the default behavior for how flex items are laid out along the cross-axis */
export type FlexAlign =
   | 'flex-start'
   | 'flex-end'
   | 'center'
   | 'baseline'
   | 'stretch';

export interface FlexProps extends ComponentPropsWithoutRef<'div'> {
   /** Sets the direction of the main layout axis */
   direction?: FlexDirection;
   /** Determines if items should wrap when overflowing the container dimensions */
   wrap?: FlexWrap;
   /** Aligns children along the main axis */
   justify?: FlexJustify;
   /** Aligns children along the cross axis */
   align?: FlexAlign;
   /** Shorthand for the CSS `gap` property */
   gap?: number;
}

export type FlexRef = HTMLDivElement;
