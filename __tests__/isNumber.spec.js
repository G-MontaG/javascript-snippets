import { isNumber } from "../isNumber";

describe('isNumber', () => {
    test('should checks if the given argument is a number.', () => {
        expect(isNumber(10)).toBeTruthy();
        expect(isNumber('10')).toBeFalsy();
        expect(isNumber(NaN)).toBeFalsy();
    });
});
