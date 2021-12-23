// Scope

let a = 30;

function a() {
    let b = 20;

    function b() {
        let c = 10;
        console.log(c)
    }

    function c() {
        let d = 17;
        console.log(d)
    }

    console.log(b)

    b()
    c()
    d()

}

function d() {
    let e = 101;
    console.log(e)
}


// Scope Chaining

/*
    A -> a, b, c, d, e, a(), b(), c(), d(), e()
    B -> a, b, c, d, e, b(), c(), d(), e()
    C -> a, b, c, d, e, b(), c(), d(), e()
    D -> a, b, c, d, e, b(), c(), d(), e()
*/