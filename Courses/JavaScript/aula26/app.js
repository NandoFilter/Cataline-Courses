// Primeiro parâmetro sempre será Resolução e o segundo será Rejeição
var showProducts = new Promise( function( resolve, reject ) {
    var products = ['Shirt', 'Shoes', 'Pants']

    setTimeout( function() {
        if ( products.length != 0 ) {
            resolve( products )
        }

        else {
            reject( 'Your Shopping Cart is Empty!' )
        }
    }, 3000 )
} )

// Será disparado apenas quando a promessa por resolvida
showProducts
    .then( function( products ) { // Resolve
        console.log( products );
    } )
    .catch( function( error ) {   // Reject
        console.log( error );
    } )