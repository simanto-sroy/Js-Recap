// Basic Currying design pattern

function currying(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function (f) {
                        return a + b + c + d + e + f;
                    }
                }
            }
        }
    }
}

const result = currying(12)(33)(32)(84)(23)(12)
console.log(result);