import React, { forwardRef, type ElementType } from 'react';
import clsx from 'clsx';
import type { TextProps, TextVariant } from './Text.types';
import styles from './Text.module.scss';

// Consolidated mapping for clean semantic defaults
const DEFAULT_ELEMENTS: Record<TextVariant, ElementType> = {
   h1: 'h1',
   h2: 'h2',
   h3: 'h3',
   h4: 'h4',
   h5: 'h5',
   h6: 'h6',
   body: 'p',
   small: 'p',
   caption: 'span',
};

export const Text = forwardRef<HTMLElement, TextProps>((props, ref) => {
   const {
      variant = 'body',
      as,
      align,
      truncate,
      strikeThrough = false,
      className,
      style,
      children,
      ...rest
   } = props;

   // 1. Determine HTML Tag
   const Component = as || DEFAULT_ELEMENTS[variant];

   // 2. Accessibility Handling for Headings
   const isHeadingVariant = variant.startsWith('h');
   const headingLevel = isHeadingVariant
      ? parseInt(variant.slice(1), 10)
      : undefined;

   // Only inject aria-level if the rendered element is NOT a native heading
   const needsAriaHeading =
      isHeadingVariant &&
      typeof Component === 'string' &&
      !Component.startsWith('h');

   // 3. Dynamic Inline Styles
   const customStyle = {
      ...style,
      ...(truncate && { '--text-line-clamp': truncate }),
   } as React.CSSProperties;

   return (
      <Component
         ref={ref}
         className={clsx(
            styles.text,
            styles[variant],
            align && styles[`align-${align}`],
            truncate && styles.truncate,
            strikeThrough && styles.strikeThrough,
            className,
         )}
         style={customStyle}
         {...(needsAriaHeading && {
            role: 'heading',
            'aria-level': headingLevel,
         })}
         {...rest}
      >
         {children}
      </Component>
   );
});

Text.displayName = 'Text';
