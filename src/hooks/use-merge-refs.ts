import { useMemo } from 'react';

type PossibleRef<T> = React.Ref<T> | undefined;

export function useMergeRefs<T>(...refs: PossibleRef<T>[]) {
   return useMemo(() => {
      if (refs.every((ref) => ref == null)) return null;

      return (value: T) => {
         refs.forEach((ref) => {
            if (typeof ref === 'function') {
               ref(value);
            } else if (ref != null) {
               (ref as React.RefObject<T | null>).current = value;
            }
         });
      };
   }, refs);
}
