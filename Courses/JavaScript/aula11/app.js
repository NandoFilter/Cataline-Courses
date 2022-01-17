'use strict'

//Escopo Global
var result

function sum( number1, number2 ) {
    // Escopo Local
    result = number1 + number2
    return result
}

console.log( sum( 3, 3 ) )

if ( result > 0 && result != null ) {
    console.log( 'Resultado Válido' )
}
