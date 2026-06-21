import { useEffect, useMemo, useState } from 'react';

export function useDateState(initial?: string | Date) {
   const initialDate = useMemo(() => {
      if (!initial) return new Date();
      const d = typeof initial === 'string' ? new Date(initial) : initial;
      return isNaN(d.getTime()) ? new Date() : d;
   }, [initial]);

   const [selected, setSelected] = useState<Date | undefined>(
      initial && !isNaN(initialDate.getTime()) ? initialDate : undefined,
   );
   const [viewYear, setViewYear] = useState<number>(initialDate.getFullYear());
   const [viewMonth, setViewMonth] = useState<number>(initialDate.getMonth());

   // Keep state in sync if initial value changes externally
   useEffect(() => {
      if (!initial) return;
      if (!isNaN(initialDate.getTime())) {
         setSelected(initialDate);
         setViewYear(initialDate.getFullYear());
         setViewMonth(initialDate.getMonth());
      }
   }, [initial, initialDate]);

   return {
      selected,
      setSelected,
      viewYear,
      setViewYear,
      viewMonth,
      setViewMonth,
   };
}
