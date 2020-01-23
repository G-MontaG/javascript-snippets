export const fibonacci = n => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

export const fibonacciMemo = (function() {
  const memo = {};

  return function func(num) {
    if (memo[num]) return memo[num];
    if (num <= 1) return num;
  
    return memo[num] = func(num - 1, memo) + func(num - 2, memo);
  }
})();
