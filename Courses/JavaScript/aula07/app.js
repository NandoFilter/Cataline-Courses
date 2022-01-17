var trafficLight = 'Verde'
var message = ''

// if ( trafficLight == 'verde' ) {
//     message = 'Pode passar'
// }

// else if ( trafficLight == 'Amarelo' ){
//     message = 'Atenção'
// }

// else if ( trafficLight == 'Vermelho' ){
//     message = 'Pare'
// }

// else {
//     message = 'Valor inválido'
// }

switch ( trafficLight )
{
    case 'Verde':
        message = 'Pode passar'
        break
    
    case 'Amarelo':
        message = 'Atenção'
        break

    case 'Vermelho':
        message = 'Pare'
        break

    default:
        message = 'Valor inválido'
        break
}

console.log( message )