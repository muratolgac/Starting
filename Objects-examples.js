//function makeUser(name, age) {
//  return {
//    name: name, // instead of name:name could written like "name," and "age,"
//    age: age,
//  };
//}
//let user = makeUser("John", 30);
//console.log(user.name + " " + user.age);

let user = {
  name: "Toruk",
  age: 29,
  isAlive: true,
};
//console.log("name" in user);
//console.log("nothing" in user);

for (let key in user) {
  console.log(key);
  console.log(user[key]);
}

let worker = {
  name: "Toruk",
  surName: "Macto",
  num: "111",
  languages: ["html", "js"],
  adress: {
    province: "hatay",
    street: "yeni",
  },
  nameInfo: function () {
    return "Name: " + this.name + " Surname: " + this.surName;
  },
};

console.log(worker.name);
console.log(worker.languages);
console.log(worker.adress);
console.log(worker.adress.province);
console.log(worker.nameInfo());

function Calisan(isim, soyisim, numara) {
  this.isim = isim;
  this.soyisim = soyisim;
  this.numara = numara;
  this.bilgileriGoster = function () {
    return (
      "İsim: " +
      this.isim +
      "\nSoyisim: " +
      this.soyisim +
      "\nNumara: " +
      this.numara
    );
  };
}
let calisan1 = new Calisan("Murat", "Olgac", 797);
let calisan2 = new Calisan("Onur", "Kenis", 803);

console.log(calisan1.bilgileriGoster());
