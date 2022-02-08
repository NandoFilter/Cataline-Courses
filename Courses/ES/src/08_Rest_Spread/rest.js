// REST

const numbers = [ 1, 2, 3, 4, 5 ];

const [ first, second, ...rest ] = numbers;

console.log( rest );

// -----------------------

const person = {
    name: 'Fernando',
    age: 19,
    height: 1.88,
    country: 'Brazil'
}

const { name, ...anyName } = person

console.log( anyName );

// -----------------------

const sum = ( ...params ) => {
    return params.reduce( ( total, next ) => total + next )
}

console.log( sum( 5, 5, 10, 10 ) );