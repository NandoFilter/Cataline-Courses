// Desestrutar Arrays

const fruits = [ 'Laranja', 'Morango', 'Maçã' ];

const [ a, , c ] = fruits

console.log( a, c ); // Laranja e Maçã

// ---------------------------------------------

// Desestruturar Objetos

const person = {
    firstName: 'Fernando',
    secondName: 'Filter',
    age: 19,
    address: {
        city: 'Encantado',
        state: 'RS'
    }
}

const { firstName, secondName, address: { city } } = person

console.log( firstName, secondName, city );

// ---------------------------------------------

// Desestruturação em Função

const showFullName = ( { firstName, secondName } ) => {
    console.log( `${firstName} ${secondName}` );
}

showFullName( person )