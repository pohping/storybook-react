import { useCallback, useContext, useEffect } from 'react';
import { FormItemContext } from '../Form.context';
import type { Value } from '../Form.types';

export const useForm = () => {
   const ctx = useContext(FormItemContext);

   const focus = useCallback(() => {
      ctx?.focus();
   }, [ctx]);

   const blur = useCallback(() => {
      ctx?.blur();
   }, [ctx]);

   const updateValue = useCallback(
      (value: Value) => {
         ctx?.updateValue(value, true);
      },
      [ctx],
   );

   // Initialize field value as null if not already set by defaultValues
   useEffect(() => {
      if (ctx && ctx.value === undefined) {
         ctx.updateValue(null, false);
      }
   }, [ctx]);

   return {
      focus,
      blur,
      updateValue,
      id: ctx?.id,
      name: ctx?.name,
      error: ctx?.error,
      value: ctx?.value,
   };
};
