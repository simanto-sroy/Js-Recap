// Recursive function 

function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// console.log(factorial(5));

function sum(a) {
    if (a == 1) {
        return 1;
    }
    return a + sum(a - 1);
}

console.log(sum(5))


const arr = [1, 2, 3, 4, 5]

function sumation(arr, lastIndex) {
    if (lastIndex === 0) {
        return 1;
    }

    return arr[lastIndex] + sumation(arr, lastIndex - 1);
}

console.log(sumation(arr, arr.length - 1 ));