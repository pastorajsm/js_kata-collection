// kata 1 add
function add(a, d) {
    return a + d
    result = 6
}
console.log('kata 1:', add(2, 4))

// kata 2 multiply

function multiply(a, d) {
    let answer = 0
    for (let i = 0; i < d; i++) {
        answer = add(answer, a)


    }
    return answer
}
console.log('Kata 2:', multiply(2, 5))

//kata 3

function power(x, n) {
    let answer = 1
    for (let i = 0; i < n; i++) {
        answer = multiply(answer, x)
    }
    return answer

}
console.log('kata 3:', power(2, 8))



// Write a function named "factorial" which takes a single argument and returns the factorial of that value.

// You may not use built -in math operators or functions(such as the * multiplication operator).Instead, you will re - use functions you wrote in earlier katas to write this function.

// A factorial multiplies a given number by every number below it.For example, "5 factorial"(usually symbolized by 5! in Mathematics) would be:

// 5 * 4 * 3 * 2 * 1 = 120
// For example, calling factorial(4) should return a result of 24.


//kata 4

function factorial(num) {
    let answer = 1
    for (let x = num; x > 0; x -= 1) {
        answer = multiply(answer, x)
    }
    return answer
}
console.log('kata 4:', factorial(5))





