// function startOfMonth(year: number, month: number) {
//    return new Date(year, month, 1);
// }

// /**
//  * Returns a 6x7 matrix of Date objects (weeks) for given month view.
//  */
// export function getCalendarMatrix(year: number, month: number) {
//    const firstDay = startOfMonth(year, month);
//    const startWeekday = firstDay.getDay(); // 0 (Sun) - 6 (Sat)

//    // Build array of Date objects for 6 rows x 7 cols
//    const matrix: Date[][] = [];
//    // Start from the Sunday before the first day (or the first day itself)
//    const startDate = new Date(year, month, 1 - startWeekday);

//    for (let week = 0; week < 6; week++) {
//       const row: Date[] = [];
//       for (let day = 0; day < 7; day++) {
//          const d = new Date(startDate);
//          d.setDate(startDate.getDate() + week * 7 + day);
//          row.push(d);
//       }
//       matrix.push(row);
//    }

//    return matrix;
// }

// export function formatLocale(date: Date) {
//    // Keep same default as your original: en-MY medium style
//    return date.toLocaleDateString('en-MY', { dateStyle: 'medium' });
// }
