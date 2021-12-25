// // Prototipycal Inheritance

// function extend(Parent, Child) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child
// }

// function Shape(color) {
//     this.color = color
// }

// Shape.prototype.common = function () {
//     console.log('I am Common Method')
// }

// const Rect = function (width, color) {
//     Shape.call(this, color)
//     this.width = width
// }
// extend(Shape, Rect)

// Rect.prototype.draw = function () {
//     console.log('I am Draw Method')
// }

// const Circel = function (height) {
//     this.height = height
// }
// extend(Shape, Circel)

// Circel.prototype.common = function () {
//     Shape.prototype.common.call(this)
//     console.log('I am Calling from common and I am overreaden')
// }

// // let shape = new Shape()
// let rect = new Rect(32, 'red')
// let circel = new Circel(23)



// Inheritance and Compositon Mixin

function mixin(target, ...sources) {
    Object.assign(target, ...sources)
}

var canWalk = {
    walk: function() {
        console.log('Walking...')
    }
}

var canEat = {
    Eat: function () {
        console.log('Eatting...')
    }
}

var canSwim = {
    Swim: function () {
        console.log('Swiping...')
    }
}

function Person(name) {
    this.name = name
}

mixin(Person.prototype, canWalk, canEat);

var personOne = new Person('Simanto Roy')
console.log(personOne)

function GoldFish(name) {
    this.name = name
}

mixin(GoldFish.prototype, canSwim, canEat)

var goldFishOne = new GoldFish('GoldFish')
console.log(goldFishOne)