export type DateFormatPreset =
   | 'short' // e.g., 9 Oct 2025
   | 'medium' // e.g., 09 Oct 2025, 14:35
   | 'long' // e.g., October 9, 2025 at 2:35 PM
   | 'time' // e.g., 14:35
   | 'iso'; // ISO 8601 string

export interface FormatDateOptions {
   locale?: string; // e.g. "en-US", "ms-MY"
   timeZone?: string; // e.g. "Asia/Kuala_Lumpur"
   preset?: DateFormatPreset;
   withSeconds?: boolean;
}
