function printNumbersToMax(maxNumber) {
    for (var i = 1; i <= maxNumber; i++) {
        console.log(i);
    }
}

const isOdd = (num) => {
    let result = false;
    if (num % 2 == 1) {
      result = true;
    }
    console.log(result);
  };

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
const selection = 2

switch (selection) {
    case 1:
        printNumbersToMax(5);
    break;
    case 2:
        isOdd(123);
    break;
    case 3:
        isPrime(7);
    break;
    default:
        console.log("Hata");
}