// Property Descriptor

// function fullName(name) {
//     this.name = name;
// }

// let person = new fullName('Simanto Roy')
// console.log(name);

// for (let i in name) {
//     console.log(i)
// }

// console.log(Object.keys(name))


// Property Descriptor

// function Person(name) {
//     this.name = name
// }

// let p1 = new Person('Simanto Roy')
// console.log(Object.getPrototypeOf(p1))
// console.log(Person.prototype)

// let descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// console.log(descriptor)

// Object.defineProperty(person, 'name', {
//     enumerable: false,
//     writable: false,
//     configurable: false,
//     value: 'SIMANTO ROY'
// });



// Protypical Inheritance

// function Person(name) {
//     this.name = name;
// }

// let p2 = new Person('Simanto Roy')
// console.log(p2)
// Person.prototype.PI = 3.1416

// console.log(Object.getPrototypeOf(p2))

var Square = function (x, y) {
    this.x = x
    this.y = y
    console.log(this.x + this.y)

    this.getWidth = function () {
        // this.draw()
        console.log('Hello Iam GetWidth Say')
    }
}

Square.prototype = {
    draw: function () {
        console.log('Hello I am draw')
        this.getWidth()
    }, 
    toString: function () {
        console.log('X is:' + this.x + ' Y is:' + this.y)
    }
}

let sqr1 = new Square(24, 42)
let sqr2 = new Square(45, 14)
// console.log(sqr1)
// console.log(sqr2)

