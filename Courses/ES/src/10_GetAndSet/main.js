class Person {
    constructor( name ) {
        this._name = name // Private
    }

    get name() {
        return this._name
    }

    set name( newName ) {
        this._name = newName
    }
}

const person = new Person( 'Fernando' )

person.name = 'João'

console.log( person );