// What is Closure

/*
    Closure is when a function is able to remmember and access to lexical scope even when that function executing outside's of lexical scope.
*/

// able to remmember and access to lexical scope

function test() {
    let msg = 'I am learning lexical scope & closure';

    function sayMsg() {
        console.log(msg);
    }

    sayMsg();
}

// test()

// that function executing outside's of lexical scope.

function test() {
    let msg = 'I am learning lexical scope & closure';

    return function () {
        console.log(msg);
    }
}

const Msg = test()
Msg();

for (let i = 1; i <= 5; i++){
    (function (n) {
        setTimeout(function () {
            console.log(n)
        }, 1000 * n)
    })(i)
}

