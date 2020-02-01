import { xProd } from "../xProd";

describe('xProd', () => {
    test('should return a new array out of the two supplied by creating each possible pair from the arrays', () => {
        expect(xProd([1, 2], ['a', 'b'])).toEqual([[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]);
    });
});
