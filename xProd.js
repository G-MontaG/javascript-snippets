// Creates a new array out of the two supplied by creating each possible pair from the arrays.
export const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);
