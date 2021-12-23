// Find Function Implement 

const arr = [1, 3, 4, 5, 6, 7, 8, 9]
 
// const finded = arr.find(function (value) {
//     return value == 3
// })

// console.log(finded);

function myFind(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return arr[i];
        }
    }
}

const finded = myFind(arr, function (value) {
    return value == 9;
})

console.log(finded)

// FindIndex Function Implement

// const findedIndex = arr.findIndex(function (value) {
//     return value == 4;
// });

// console.log(findedIndex);

function findIndex(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return i;
        }
    }
}

const findedIndex = findIndex(arr, function (value) {
    return value == 9;
})

console.log(findedIndex)