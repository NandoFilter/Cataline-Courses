const numbers = [ 1, 2, 3, 4, 5 ]

// MAP ----------------------------------------

const newNumbers = numbers.map( function( number ) {
    return number + 1;
} )

console.log( newNumbers );
console.log( numbers );

// REDUCE -------------------------------------

const total = numbers.reduce( function( total, nextNumber ) {
    /**
     * Total + NextNumber
     * ------------------
     *   0   +   1
     *   1   +   2
     *   2   +   3
     *   3   +   4
     *   4   +   5
     * ------------------
     * Return 15
     */
    return total + nextNumber
} )

console.log( total );

// FOR EACH -----------------------------------

numbers.forEach ( function ( number, index ) {
    numbers[index] = number + 1
} )

// FILTER -------------------------------------

const todos = [
    { text: 'Lavar a louça', done: false },
    { text: 'Apanhar o lixo', done: true },
    { text: 'Dobrar as roupas', done: true }
]

const doneTodos = todos.filter( function ( todo ) {
    return todo.done === true;
});

console.log( doneTodos );

// FIND ---------------------------------------

const find = todos.find( function ( todo ) {
    return todo.text === 'Dobrar as roupas';
});

console.log( find );

// FIND INDEX ---------------------------------

const index = todos.findIndex( function ( todo ) {
    return todo.text === 'Lavar a louça';
} );

console.log( index );

// SOME ---------------------------------------

const cars = [ 'Fusca', 'Civic', 'HB20' ];

const hasFusca = cars.some( function( car ) {
    return car === 'Fusca';
} );

console.log( hasFusca );