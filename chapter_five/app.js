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

const rectFactoryPattern = function (width, height) {
    return {
        width: width,
        height: height,
    
        draw: function () {
            console.log('I am a draw method');
        },
    
        printProperties: function () {
            console.log('My Width is ' + this.width);
            console.log('My Height is ' + this.height);
        }
    }
}


const rectFactP1 = rectFactoryPattern(40, 20)
rectFactP1.draw()
rectFactP1.printProperties()


const rectFactP2 = rectFactoryPattern(200, 300)
rectFactP2.draw()
rectFactP2.printProperties()