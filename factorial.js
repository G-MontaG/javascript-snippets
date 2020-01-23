const factorial = n => {
    if (n < 0) {
        return 'Negative numbers are not allowed!';
    } else {
        return n <= 1 ? 1 : n * factorial(n - 1);
    }
}
