// Function Compositon

function print(n) {
    return n
}

function multiply(m) {
    return m * 5
}

function add(a, b) {
    return a + b
}

const total = print(multiply(add(10, 5))) //that's the function composition
console.log(total);