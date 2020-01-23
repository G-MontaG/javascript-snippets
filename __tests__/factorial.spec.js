import { factorial } from "../factorial";

describe('Factorial', () => {
    test('should return error message for negative numbers', () => {
        expect(factorial(-1)).toEqual('Negative numbers are not allowed!');
    });
    test('should return factorial for positive numbers', () => {
        expect(factorial(0)).toEqual(1);
        expect(factorial(2)).toEqual(2);
        expect(factorial(4)).toEqual(24);
    });
});
