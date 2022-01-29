// Executa comando após o tempo determinado

function doAction() {
    console.log( 'Executou' );
}

// Sem parênteses para não executar diretamente

setInterval( doAction, 3000 ) // Executa e continua executando
setTimeout( doAction, 3000 )  // Executa uma única vez