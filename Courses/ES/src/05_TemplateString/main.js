const showProduct = ( product, price ) => {
    console.log( `O valor de ${ product } é de R$${ Math.round( price ) }, pode comprar!` );
}

showProduct( 'Camisa', 20.7 )