import { fibonacci, fibonacciMemo } from "../fibonacci";

describe('Fibonacci', () => {
    test('should return fibonacci number', () => {
        expect(fibonacci(0)).toEqual(0);
        expect(fibonacci(1)).toEqual(1);
        expect(fibonacci(2)).toEqual(1);
        expect(fibonacci(3)).toEqual(2);
        expect(fibonacci(4)).toEqual(3);
        expect(fibonacci(5)).toEqual(5);
    });
    test('should return same fibonacci number but for large orders', () => {
        expect(fibonacciMemo(0)).toEqual(0);
        expect(fibonacciMemo(1)).toEqual(1);
        expect(fibonacciMemo(2)).toEqual(1);
        expect(fibonacciMemo(3)).toEqual(2);
        expect(fibonacciMemo(4)).toEqual(3);
        expect(fibonacciMemo(5)).toEqual(5);
        expect(fibonacciMemo(23)).toEqual(28657);
        expect(fibonacciMemo(45)).toEqual(1134903170);
    });
});
