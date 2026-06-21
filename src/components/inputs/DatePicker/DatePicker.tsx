import React, { forwardRef, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { offset, useFloating } from '@floating-ui/react';
import clsx from 'clsx';
import { useOutsideClick, useMergeRefs } from '@/hooks';
import { useForm } from '@/components/general/Form';
import { Icon } from '@/components/data-display/Icon';
import { formatLocale, getCalendarMatrix } from './utils/date-utils';
import type { DatePickerProps, DatePickerRef } from './DatePicker.types';
import { useDateState } from './hooks/use-date-state';
import styles from './DatePicker.module.scss';

export const DatePicker = forwardRef<DatePickerRef, DatePickerProps>(
   (props, forwardedRef) => {
      const {
         value,
         onChange,
         size = 'md',
         disabled = false,
         error,
         portalContainer = null,
         className,
         ...rest
      } = props;
      const form = useForm();
      const [open, setOpen] = useState(false);

      // Floating UI Setup
      const { refs, floatingStyles } = useFloating<HTMLDivElement>({
         placement: 'bottom-start',
         middleware: [offset(4)],
         open,
      });

      // Merge refs safely, casting setReference to standard React callback
      const mergedRef = useMergeRefs<HTMLDivElement>(
         forwardedRef,
         refs.setReference as (node: HTMLDivElement | null) => void,
      );

      // Date State
      const {
         selected,
         setSelected,
         viewYear,
         setViewYear,
         viewMonth,
         setViewMonth,
      } = useDateState(value);

      const matrix = useMemo(
         () => getCalendarMatrix(viewYear, viewMonth),
         [viewYear, viewMonth],
      );
      const formattedValue = useMemo(
         () => (selected ? formatLocale(selected) : ''),
         [selected],
      );

      // Handlers
      const close = () => {
         form.blur?.();
         setOpen(false);
      };

      useOutsideClick([refs.domReference, refs.floating], close);

      useEffect(() => {
         function onKey(e: KeyboardEvent) {
            if (!open) return;
            if (e.key === 'Escape') close();
         }
         document.addEventListener('keydown', onKey);
         return () => document.removeEventListener('keydown', onKey);
      }, [open]);

      const handleOpen = () => {
         if (disabled) return;
         setOpen(true);
         form.focus?.();
      };

      const handleSelectDate = (date: Date) => {
         const isoString = date.toISOString();
         setSelected(date);
         setViewYear(date.getFullYear());
         setViewMonth(date.getMonth());

         onChange?.(isoString, date);
         form.updateValue?.(isoString);
         close();
      };

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
         const val = e.target.value;
         const parsed = Date.parse(val);
         if (!isNaN(parsed)) {
            const d = new Date(parsed);
            handleSelectDate(d);
         }
      };

      // prev / next month
      const prevMonth = () => {
         if (viewMonth === 0) setViewYear(viewYear - 1);
         setViewMonth((m) => (m - 1 + 12) % 12);
      };
      const nextMonth = () => {
         if (viewMonth === 11) setViewYear(viewYear + 1);
         setViewMonth((m) => (m + 1) % 12);
      };

      const renderPanel = () => {
         const container = portalContainer ?? document.body;
         return createPortal(
            <div
               className={clsx(styles.panel, styles[size])}
               role="dialog"
               aria-modal="false"
               ref={refs.setFloating}
               style={floatingStyles}
               onClick={(e) => e.stopPropagation()}
            >
               <div className={styles.header}>
                  <button
                     type="button"
                     className={styles.navButton}
                     onClick={prevMonth}
                  >
                     <Icon name="ArrowLeft" />
                  </button>
                  <div className={styles.dropdownWrapper}>
                     <select
                        className={styles.months}
                        value={viewMonth}
                        onChange={(e) => setViewMonth(Number(e.target.value))}
                     >
                        {Array.from({ length: 12 }).map((_, i) => (
                           <option key={i} value={i}>
                              {new Date(0, i).toLocaleString(undefined, {
                                 month: 'long',
                              })}
                           </option>
                        ))}
                     </select>
                     <input
                        className={styles.years}
                        type="number"
                        size={4}
                        value={viewYear}
                        onChange={(e) => setViewYear(Number(e.target.value))}
                     />
                  </div>
                  <button
                     type="button"
                     className={styles.navButton}
                     onClick={nextMonth}
                  >
                     <Icon name="ArrowRight" />
                  </button>
               </div>

               <div className={styles.weekdays}>
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                     (d) => (
                        <div key={d}>{d}</div>
                     ),
                  )}
               </div>

               <div className={styles.datesGrid} role="grid">
                  {matrix.flat().map((d) => {
                     const isOutside = d.getMonth() !== viewMonth;
                     const isToday =
                        d.toDateString() === new Date().toDateString();
                     const isSelected =
                        d.toDateString() === selected?.toDateString();

                     return (
                        <button
                           type="button"
                           className={styles.dateCell}
                           key={d.toISOString()}
                           onClick={() => handleSelectDate(d)}
                           data-outside={isOutside || undefined}
                           data-today={isToday || undefined}
                           data-selected={isSelected || undefined}
                        >
                           {d.getDate()}
                        </button>
                     );
                  })}
               </div>

               <div className={styles.footer}>
                  <button
                     type="button"
                     className={clsx(styles.actionButton, styles.primary)}
                     onClick={() => handleSelectDate(new Date())}
                  >
                     Today
                  </button>
                  <button
                     type="button"
                     className={styles.actionButton}
                     onClick={close}
                  >
                     Close
                  </button>
               </div>
            </div>,
            container,
         );
      };

      return (
         <>
            <div
               ref={mergedRef}
               className={clsx(
                  styles.datePicker,
                  styles[size],
                  {
                     [styles.error]: error || form.error,
                     [styles.disabled]: disabled,
                  },
                  className,
               )}
               role="group"
               onClick={handleOpen}
               {...rest}
            >
               <input
                  className={styles.input}
                  placeholder="Select date"
                  disabled={disabled}
                  aria-label="Date input"
                  value={formattedValue}
                  onChange={handleInputChange}
                  readOnly // Prevents mobile keyboard popups; handled via calendar
               />
               <button
                  type="button"
                  className={styles.section}
                  disabled={disabled}
               >
                  <Icon name="Calendar" />
               </button>
            </div>
            {open && renderPanel()}
         </>
      );
   },
);

DatePicker.displayName = 'DatePicker';
