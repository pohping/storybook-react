export function toCssUnit(
   value: string | number | null | undefined,
): string | undefined {
   if (value === null || value === undefined) {
      return undefined;
   }

   if (typeof value === 'number') {
      // Prevent returning 'NaNpx'
      return Number.isNaN(value) ? undefined : `${value}px`;
   }

   return value;
}
