class Car {
    constructor( brand, price = 10 ) {
        this.brand = brand;
        this.price = price;
    }
}

const civic = new Car( 'Honda', 130  )
const hb20 = new Car( 'Hyundai', 80 )

console.log( civic );
console.log( hb20 );