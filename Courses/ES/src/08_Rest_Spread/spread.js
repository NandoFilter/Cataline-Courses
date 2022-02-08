// SPREAD

const numbers1 = [ 1, 2, 3, 4, 5 ]
const numbers2 = [ 5, 6, 7, 8, 9, 10 ]

const numbers = [...numbers1, ...numbers2 ]

console.log( numbers );

// -----------------------

const person = {
    name: 'Fernando',
    age: 19,
    height: 1.88,
    country: 'Brazil'
}

const person1 = {
    ...person,
    country: 'Canada'
}

console.log( person1 );