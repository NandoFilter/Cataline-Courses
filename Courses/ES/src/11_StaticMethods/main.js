class Person {
    constructor( firstName, lastName ) {
        this.firstName = firstName
        this.lastName = lastName
    }

    get fullName() {
        return Person.joinNames( this.firstName, this.lastName )
    }

    static joinNames( firstName, lastName ) {
        return `${firstName} ${lastName}`
    }
}

const person = new Person( 'Fernando', 'Filter' )

console.log( person.fullName );