function printNumbersToEleven() {
    for (var i = 1; i < 11; i++) {
        console.log(i);
    }
}

function printHello() {
    console.log("hello");
}

function printHelloWithName(name) {
    console.log("hello " + name);
}

function getFullName(name, surname) {
    return name + " " + surname;
}

function getMultiplicationByRandom(num) {
    // random sayısını tam sayıya çevirme
    const random = Math.random() * 9 + 1;
    //console.log("Random:", random);
    return num * random;
}

const name = "Toruk2";
const fullname = getFullName(name, "Macto");
//console.log(fullname);
//printHelloWithName(name);

const result1 = getMultiplicationByRandom(5);
//console.log("result1:", result1);

const result2 = getMultiplicationByRandom(4);
//console.log("result2:", result2);

//if (result1 > result2) {
//   console.log(result1);
//} else {
//   console.log(result2);
//}

function examResult(visa, final) {
    if (visa * 0.3 + final * 0.7 >= 50 && final >= 50) {
        console.log("Sınavı Geçtiniz");
    } else {
        console.log("Geçmiş Olsun");
    }
}
const visa = 90
const final = 50
examResult(visa, final);

