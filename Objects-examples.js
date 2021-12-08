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
