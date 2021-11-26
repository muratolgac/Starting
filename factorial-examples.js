function factorial(x) {
    result = 1
    for (i = 2; i <= x; i++) {
        result = result * i
    }
    if (x == 0) {
        console.log("X Factorial = 1")
    } else if (x < 0) {
        console.log("X Factorial = -1")
    } else {
        console.log("X Factorial =", result);
    }
}
factorial(0);