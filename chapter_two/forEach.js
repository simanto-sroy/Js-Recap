// ForEach Function Implement

const arr = [1, 3, 4, 5, 6, 7, 8]

// let sum = 0
// arr.forEach(function(value, index, arr) {
//     sum += value
// })

// console.log(sum)
function forEachs(arr ,cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr)
    }
    
}

forEachs(arr, function (value, index, arr) {
    // console.log(value, index, arr)
})

let sum = 0;
forEachs(arr, function (value, index, arr) {
    sum += value
})
console.log(sum);

forEachs(arr, function (value, index, arr) {
    arr[index] = value + 5
})
console.log(arr)