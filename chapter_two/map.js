// Map Function Implement 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const result = arr.map(function (value) {
//     return value*value
// })

// console.log(result);
// console.log(arr) 

function newMap(arr, cb) {
    let copyArr = []
    for (let i = 0; i < arr.length; i++) {
        let temp = cb(arr[i], i, arr)
        copyArr.push(temp)
    }
    return copyArr;
}

const mapArr = newMap(arr, function (value, index, arr) {
    return value * value
})

console.log(mapArr);

const mapArr2 = newMap(arr, function (value, index, arr) {
    return value, index, arr
});

console.log(mapArr2);