// Object Literal

const rect = {
    width: 100,
    height: 40,

    draw: function () {
        console.log('I am a draw method');
    },

    printProperties: function () {
        console.log('My Width is ' + this.width);
        console.log('My Height is ' + this.height);
    }
}

// rect.draw()
rect.width = 300
rect.height = 100
rect.draw()

// the bellow function this keyword descripe

const another = {
    width: 30,
    height: 40,

    print: rect.printProperties
}

another.print()



