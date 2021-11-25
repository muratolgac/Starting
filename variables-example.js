// 2 tane değişken yaratma yöntemi var. const ve let
// const ile yaratırsan o değişkene tekrar başka bir değer atayamazsın. const = constant = sabit
const name = "Toruk";
const age = 26;

// let ile yaratırsan daha sonra usd = 20 diye başka bir atama yapabilirsin.
let usd = 8;
console.log(usd);

// satır 7'de let yerine const yazsaydık satır 12'de tekrar eşitleme yapamazdık.
// kod hata verirdi. satır 7 deki let'i const yaparak deneyebilirsin nasıl bir hata verdiğini.
usd = 12;
console.log(usd);

const presidentName = "Biden";
// parantez açıp kapattığın her şey bir fonksiyondur.
// console.log() bir fonksiyondur. parantezin içine yazdığın değerler de parametredir.
// satır 20 deki console log şunu yazar:
// RTE
console.log(presidentName);

// console log içine değişkenden önce bu şekilde bir string (kelime) verirsek
// console'a yazdırılan değişkenin önüne verdiğimiz stringi yazar. satır 25 deki console log şunu yazar:
// presidentName: Biden
console.log("presidentName:", presidentName);
console.log("Benim adım:", name);
console.log("başkanın adı", presidentName);

const age = 17;

if (age < 18) {
    console.log("Alice is under 18 years old.");
} else if (age >= 18 && age <= 21) {
    console.log("Alice is between the ages of 18 and 21.");
} else {
    console.log("Alice is over 21 years old.");
}

for (var i = 1; i < 11; i++) {
    console.log(i);
}

for (var i = 1; i < 11; i++) {
    if (i == 5) {
        console.log("Boom");
    } else if (i == 6) {
        console.log("six");
    } else if (i ==7) {
        console.log("Kafanagore");
    } else if (i == 10) {
        console.log("FINISH");
    } else {
        console.log(i);
    }

}
