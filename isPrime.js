//function isPrime(num) {
//    if (num % 2 !== 0 && num % 3 !== 0) {
//        console.log(num + " asal sayıdır");
//    } else {
//        console.log(num + " asal sayı değildir");
//    }
//}
//isPrime(82);


function isPrime(num) {
    let result = false
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            result = true
        }
    }
    if (result = false) {
        console.log(num + " asal sayıdır");
    } else {
        console.log(num + " asal sayı değildir");
    }
}
isPrime(8)