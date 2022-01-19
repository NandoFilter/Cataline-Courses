var array = ['João', 'Oliver', 'Maria']

for ( var i = 0; i < array.length; i++ ) {
    console.log( array[i] )
}

array.push( 'Fernando' )

console.log( array )
console.log( array.indexOf( 'João' ) )
console.log( array.pop() ) // Exclue o último valor e retorna esse valor
console.log( array.splice( 0, 2 ) ) // Exclui conforme a posição (0) e a qntd de vezes (2)