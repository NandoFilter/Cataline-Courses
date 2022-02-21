class Veiculo {
    constructor( rodas ) {
        this.rodas = rodas;
   }

   acelerar() {
       console.log( "Acelerou" );
   }
}


class Moto extends Veiculo {
    constructor( rodas, capacete ) {
        super( rodas )
        this.capacete = capacete;
    }
    
    empinar() {
        console.log( `Empinou com ${ this.rodas } roda(s)` );
    }

    usandoCapacete() {
        console.log( this.capacete );
    }
}

const bross = new Moto( 1, true );

bross.acelerar();