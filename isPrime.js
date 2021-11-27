function isPrime(num) {
  let result = true;
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      result = false;
      break;
    }
  }
  console.log(`Is ${num} prime?: ${result}`);
}
isPrime(7);
