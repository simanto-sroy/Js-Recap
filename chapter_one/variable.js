//Variables

var name = 'Simanto Roy';
var age = 20;
var collageName = 'Brahman Baria Polytechnic Institute';

const person = {
    name: name,
    age: age,
    collageName: collageName,
    address: 'Rangpur Dhaka Bangladesh'
}

console.log(person)

console.log('JavaScript You Are Awesome');

function getFirstName(name) {
    let firstName = '';
    firstName = name.split(' ')[0];
    return firstName;
}


const result = getFirstName('Simanto Roy')
console.log(result);

// console.log('Hello JavaScript You Are Awesome')