// Reduce function Implement 

const arr = [12, 21, 33, 44, 52, 62, 74, 81, 90]

// const reduced = arr.reduce(function (prev, curr) {
//     // return Math.max(prev, curr)
//     return prev + curr;
// });

// console.log(reduced)

function myReduce(arr, cb, acc) {
    for (let i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i]);
    }
    return acc;
}

const reduced = myReduce(arr, function (prev, curr) {
    return Math.min(prev, curr);
}, 22)

console.log(reduced);

const reduced2 = myReduce(arr, function (prev, curr) {
    return prev + curr;
}, 0)

console.log(reduced2);