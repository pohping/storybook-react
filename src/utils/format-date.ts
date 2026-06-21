import type { FormatDateOptions } from './utils.types';

/**
 * Format a given date string, timestamp, or Date object into human-readable form.
 */
export const formatDate = (
   dateInput: string | number | Date,
   options: FormatDateOptions = {},
): string => {
   const {
      locale = 'en-US',
      timeZone,
      preset = 'short',
      withSeconds = false,
   } = options;

   const date = dateInput instanceof Date ? dateInput : new Date(dateInput);
   if (isNaN(date.getTime())) return '';

   if (preset === 'iso') return date.toISOString();

   const base: Intl.DateTimeFormatOptions = {
      timeZone,
   };

   switch (preset) {
      case 'short':
         Object.assign(base, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
         });
         break;
      case 'medium':
         Object.assign(base, {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
         });
         if (withSeconds) base.second = '2-digit';
         break;
      case 'long':
         Object.assign(base, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
         });
         if (withSeconds) base.second = '2-digit';
         break;
      case 'time':
         Object.assign(base, {
            hour: '2-digit',
            minute: '2-digit',
         });
         if (withSeconds) base.second = '2-digit';
         break;
   }

   return new Intl.DateTimeFormat(locale, base).format(date);
};
