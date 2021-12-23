// Base count

function base(b) {
    return function (n) {
        let result = 1;
        for (let i = 0; i < b; i++) {
            result *= n
        }
        return result;
    }
}

const result2 = base(10);
const result3 = result2(3);
console.log(result3)