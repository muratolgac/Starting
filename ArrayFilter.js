const getNumberList = (maxNumber) => {
    const numberList = [];
    for (let i = 1; i <= maxNumber; i++) {
      numberList.push(i);
    }
    return numberList;
  };
  
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
  };
  
  const numberList = getNumberList(13);
  
  const filteredNumberList = numberList
    .filter((num) => num < 10)
    .filter((num) => isPrime(num))
    .map((num) => num * 5);