// // Object Literal

// const rect = {
//     width: 100,
//     height: 40,

//     draw: function () {
//         console.log('I am a draw method');
//     },

//     printProperties: function () {
//         console.log('My Width is ' + this.width);
//         console.log('My Height is ' + this.height);
//     }
// }

// // rect.draw()
// rect.width = 300
// rect.height = 100
// rect.draw()

// // the bellow function this keyword descripe

// const another = {
//     width: 30,
//     height: 40,

//     print: rect.printProperties
// }

// another.print()



// Factory Pattern

// const rectFactoryPattern = function (width, height) {
//     return {
        // width: width,
        // height: height,
    
        // draw: function () {
        //     console.log('I am a draw method');
        // },
    
        // printProperties: function () {
        //     console.log('My Width is ' + this.width);
        //     console.log('My Height is ' + this.height);
        // }
//     }
// }


// const rectFactP1 = rectFactoryPattern(40, 20)
// rectFactP1.draw()
// rectFactP1.printProperties()


// const rectFactP2 = rectFactoryPattern(200, 300)
// rectFactP2.draw()
// rectFactP2.printProperties()


// Constructor Pattern

// const Rectangle = function (width, height) {
    // this.width = width
    // this.height = height

    // this.draw = function () {
    //     this.printProperties()
    // }

    // this.printProperties = function () {
    //     console.log('My Width is ' + this.width)
    //     console.log('My Width is ' + this.height)
    // }
// }

// const rect1 = new Rectangle(39, 32)
// rect1.draw()


// Function Is an Object

// function test() {
//     console.log('something...')
// }

// // test()


// const Rect = new Function('width', 'height',
    
//    `this.width = width
//     this.height = height

//     this.draw = function () {
//         this.printProperties()
//     }

//     this.printProperties = function () {
//         console.log('My Width is ' + this.width)
//         console.log('My Width is ' + this.height)
//     }

// `)

// const rect = new Rect(10, 30)
// console.log(rect)


// Call, Apply, Bind Method

// function myFunc(a, b) {
//     console.log(this)
//     console.log(this.c + this.d + a + b )
// }

// myFunc.call({c: 30, d: 40}, 20, 21)
// myFunc.apply({c: 30, d: 40}, [20, 21])
// let   = myFunc.bind({ c: 30, d: 10 }, 20, 10)
// BindRslt()


// Pass by Value Pass by Refferance
// Call by Value Call by Refferance

var n = 20

function MyNum(n) {
    n = n + 100
    console.log(n)
}

MyNum(n)
console.log(n)

var obj = {
    a: 20,
    b: 30
}

function MyObj(obj) {
    obj.a = obj.a + 100
    obj.b = obj.b + 200
    console.log(obj)
}

MyObj(obj)
console.log(obj)
