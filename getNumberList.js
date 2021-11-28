const getNumberList = (maxNumber) => {
    const numberList = [];
    for (let i = 1; i <= maxNumber; i++) {
      numberList.push(i);
    }
    return numberList;
  };
const numberList = getNumberList(20);
const filteredNumberList = numberList.filter((num) => num<14);
const isPrime = filteredNumberList.filter ((num)=>{
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
          return false;
        }
      }
      return num > 1;
})
const mappedNumberList = isPrime.map((num,index)=>{
        return `Kümenin '${index+1}'. elemanı ${num}`
})
console.log(mappedNumberList);