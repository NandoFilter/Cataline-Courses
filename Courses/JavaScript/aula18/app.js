// DOM - Document Object Model

var input = document.querySelector( 'input#idade' )

document.querySelectorAll( 'input' )[0]                 // Seleciona todos por Seletor Específico
document.querySelector( 'div#app input[name="idade"]' ) // Seleciona por Seletor Específico

document.getElementById( 'idade' )                      // Seleciona por ID
document.getElementsByClassName( 'idade' )[0]           // Seleciona por CLASS
document.getElementsByTagName( 'input' )[0]             // Seleciona por TAG

console.log( input.parentElement );                     // Elemento Pai
console.log( input.children );                          // Elemento Filho
console.log( input.previousElementSibling );            // Elemento Anterior
console.log( input.nextElementSibling );                // Elemento Posterior