import type { ComponentPropsWithoutRef } from 'react';
import type React from 'react';
import type { GridItem } from './GridItem';

/** Pixel value definition for system responsive layout breakpoints */
type breakpoints = {
   sm: 576;
   md: 768;
   lg: 992;
   xl: 1200;
};

/** Responsive key-value mapt targeting specific layout break points */
export type ResponsiveNumber =
   | number
   | Partial<Record<keyof breakpoints, number>>;

export interface GridProps extends ComponentPropsWithoutRef<'div'> {
   /** The total number of track columns to allocate within the grid framework */
   columns?: ResponsiveNumber;
   /** Automatic responsive track layout rule using a minimum child element target width */
   minChildWidth?: number | string;
   /** Shorthand spacing gap for row and column gutters combined */
   gap?: number | string;
   /** Distinct spacing gutter applied exclusively between rows */
   rowGap?: number | string;
   /** Distinct spacing gutter applied exclusively between columns */
   columnGap?: number | string;
   /** Adjusts vertical tracking positions of block objects within grid cells */
   alignItems?: React.CSSProperties['alignItems'];
   /** Adjusts inline horizontal tracking positions of block objects within grid cells */
   justifyItems?: React.CSSProperties['justifyItems'];
}

export type CSSVars = React.CSSProperties & {
   [key: `--${string}`]: string | number | undefined;
};

export type GridRef = HTMLDivElement;

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
   /** The number of track columns this single cell should span horizontally */
   span?: ResponsiveNumber;
}

export type GridComponent = React.ForwardRefExoticComponent<
   GridProps & React.RefAttributes<HTMLDivElement>
> & {
   Item: typeof GridItem;
};
