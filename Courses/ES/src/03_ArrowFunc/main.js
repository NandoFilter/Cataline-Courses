const todos = [
    { text: 'Lavar a louça', done: true },
    { text: 'Apanhar o lixo', done: false },
    { text: 'Dobrar as roupas', done: false },
]

// Função Inline
const doneTodos = todos.filter( ( todo ) => todo.done );

console.log( doneTodos );

// ---------------------------------------

// function anything() {
//     console.log( 'Hello, World!' );
// }

const hello = () => 'Hello, World!';

console.log( hello() );

// Necessário colocar parênteses entre objetos
const object = () => ( { name: 'Fernando' } );

console.log( object() );

