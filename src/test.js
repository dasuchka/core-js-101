function isPrime(n) {
  let result = true;
  for (let i = 2; i <= n - 1; i++) {
    if (n % i === 0) {
      result = false;
      return result;
    }
  }
  return result;
}
const a = new Number(42);
console.log(a);
