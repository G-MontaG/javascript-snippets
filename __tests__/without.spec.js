import { without } from "../without";

describe('without', () => {
    test('should filters out the elements of an array, that have one of the specified values.', () => {
        expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
    });
});
