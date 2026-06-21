import { forwardRef, useEffect, useRef, useState, useMemo } from 'react';
import {
   useFloating,
   offset,
   flip,
   shift,
   size as floatSize,
} from '@floating-ui/react';
import clsx from 'clsx';
import { useOutsideClick } from '@/hooks';
import { useForm } from '@/components/general';
import { Icon } from '@/components/data-display';
import type { SelectProps } from './Select.types';
import { SelectResults } from './SelectResults';
import styles from './Select.module.scss';

export const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
   const {
      options = [],
      value,
      className,
      defaultValue = '',
      placeholder = 'Select an option',
      disabled,
      size = 'md',
      error,
      fluid,
      loading,
      searchable = false,
      onValueChange,
      onSearch,
      ...rest
   } = props;
   const isControlled = value !== undefined;
   const [internalValue, setInternalValue] = useState(
      isControlled ? value : defaultValue,
   );
   const [open, setOpen] = useState(false);
   const [highlightedIndex, setHighlightedIndex] = useState<number | null>(
      null,
   );
   const [searchQuery, setSearchQuery] = useState('');

   const containerRef = useRef<HTMLDivElement>(null);
   const inputRef = useRef<HTMLInputElement>(null);

   const form = useForm();
   const currentValue =
      form.value !== undefined
         ? (form.value as string)
         : isControlled
           ? value
           : internalValue;

   // Setup Floating UI positioning mechanics
   const { refs, floatingStyles } = useFloating<HTMLDivElement>({
      open,
      onOpenChange: setOpen,
      placement: 'bottom-start',
      middleware: [
         offset(4),
         flip(),
         shift(),
         floatSize({
            apply({ rects, elements }) {
               Object.assign(elements.floating.style, {
                  width: `${rects.reference.width}px`,
               });
            },
         }),
      ],
   });

   // Handle closing when clicking anywhere outside the elements boundaries
   useOutsideClick([containerRef, refs.floating], () => {
      if (open) setOpen(false);
   });

   // Filter options down if localized searchable mode is active
   const filteredOptions = useMemo(() => {
      if (!searchable || onSearch) return options;
      return options.filter((option) =>
         String(option.label).toLowerCase().includes(searchQuery.toLowerCase()),
      );
   }, [options, searchable, searchQuery, onSearch]);

   const selectedOption = useMemo(() => {
      return options.find((opt) => opt.value === currentValue);
   }, [options, currentValue]);

   const handleSelect = (newValue: string) => {
      if (!isControlled) {
         setInternalValue(newValue);
      }
      onValueChange?.(newValue);
      form.updateValue?.(newValue);
      setOpen(false);
      setSearchQuery('');
   };

   const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (disabled) return;

      if (e.key === 'ArrowDown') {
         e.preventDefault();
         if (!open) {
            setOpen(true);
            return;
         }
         setHighlightedIndex((prev) =>
            prev === null || prev >= filteredOptions.length - 1 ? 0 : prev + 1,
         );
      } else if (e.key === 'ArrowUp') {
         e.preventDefault();
         if (!open) {
            setOpen(true);
            return;
         }
         setHighlightedIndex((prev) =>
            prev === null || prev <= 0 ? filteredOptions.length - 1 : prev - 1,
         );
      } else if (e.key === 'Enter') {
         e.preventDefault();
         if (
            open &&
            highlightedIndex !== null &&
            filteredOptions[highlightedIndex]
         ) {
            handleSelect(filteredOptions[highlightedIndex].value);
         } else {
            setOpen((prev) => !prev);
         }
      } else if (e.key === 'Escape') {
         setOpen(false);
      }
   };

   // Reset selection highlighting array index whenever visibility flips
   useEffect(() => {
      if (!open) {
         setHighlightedIndex(null);
      } else {
         const currentIdx = filteredOptions.findIndex(
            (opt) => opt.value === currentValue,
         );
         setHighlightedIndex(currentIdx >= 0 ? currentIdx : 0);
         if (searchable && inputRef.current) {
            inputRef.current.focus();
         }
      }
   }, [open, filteredOptions, currentValue, searchable]);

   return (
      <div
         ref={(node) => {
            // Safely distribute assignments across both standard react ref & floating trigger bounds hooks
            refs.setReference(node);
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
            containerRef.current = node;
         }}
         className={clsx(
            styles.select,
            styles[size],
            {
               [styles.open]: open,
               [styles.disabled]: disabled,
               [styles.error]: error || form.error,
               [styles.search]: searchable,
               [styles.fluid]: fluid,
            },

            className,
         )}
         onKeyDown={handleKeyDown}
         onClick={() => !disabled && setOpen((prev) => !prev)}
         tabIndex={disabled ? -1 : 0}
         {...rest}
      >
         <div className={styles.input}>
            {searchable && open ? (
               <input
                  ref={inputRef}
                  type="text"
                  className={styles.searchField}
                  value={searchQuery}
                  //  placeholder={placeholder}
                  onChange={(e) => {
                     setSearchQuery(e.target.value);
                     onSearch?.(e.target.value);
                  }}
                  onClick={(e) => e.stopPropagation()}
               />
            ) : (
               <span className={clsx(!selectedOption && styles.placeholder)}>
                  {selectedOption ? selectedOption.label : placeholder}
               </span>
            )}
         </div>

         <div className={styles.section}>
            <Icon name={searchable ? 'Magnifier' : 'ArrowDown'} />
         </div>

         <SelectResults
            ref={refs.setFloating}
            style={floatingStyles}
            open={open}
            size={size}
            loading={loading}
            options={filteredOptions}
            value={currentValue}
            highlightedIndex={highlightedIndex}
            onItemSelect={handleSelect}
         />
      </div>
   );
});

Select.displayName = 'Select';
