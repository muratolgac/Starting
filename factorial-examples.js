function factorial(x) {
    for (var i=x-1; i>=1 ; i--) {
        x = x * i
    }
    console.log("X Factorial =",x);
}
let x=5
factorial(x);