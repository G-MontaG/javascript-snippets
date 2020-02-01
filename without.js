// Filters out the elements of an array, that have one of the specified values.
export const without = (arr, ...args) => arr.filter(v => !args.includes(v));
