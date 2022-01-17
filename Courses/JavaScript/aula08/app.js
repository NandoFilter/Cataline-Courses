/*
 ==     Igual
 ===    Exatamente igual ( valor e tipo )
 !=     Diferente
 >      Maior
 <      Menor
 >=     Maior ou igual
 <=     Menor ou igual
 &&     And
 ||     Or
 !      Not
 */

var email = 'fernando@gmail.com'
var password = 'a1b2c3'

if ( email === 'joao@gmail.com' && password === '1234' ) {
    console.log( 'Usuário autenticado' )
}

else {
    console.log( 'Dados inválidos' )
}

var age = 18
var sex = 'M'

if ( sex === 'M' || age >= 18 ) {
    console.log( 'Entrada liberada' )
}

else {
    console.log( 'Entrada barrada' )
}

var isActive = true

isActive = !isActive

console.log( isActive )