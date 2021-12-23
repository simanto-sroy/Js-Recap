// Filter Function Implement 

// const arr = [1, 2, 3, 4, 5, 6];

const arr = [];
for (let i = 0; i <= 10; i++){
    const randomArr = Math.floor(Math.random() * 10);
    arr.push(randomArr);
}


// const filteredArr = arr.filter(function (value) {
//     return value % 2 == 1;
// });

// console.log(filteredArr)

function myFilter(arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// const filteredArr = myFilter(arr);
// console.log(filteredArr);

const filteredArr = myFilter(arr, function (value, index, arr) {
    return value > 4
});

console.log(filteredArr);

const filteredArr2 = myFilter(arr, function (value, index, arr) {
    return value, index, arr;
})

console.log(filteredArr2);

let sum = 0;
const filteredSum = myFilter(arr, function (value, index, arr) {
    return sum += value
});
console.log(sum);