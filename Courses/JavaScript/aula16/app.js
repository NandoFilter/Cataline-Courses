var person = {
    name: 'João Silva',
    height: 70.5
}

var any = {
    age: 15
}

var newPerson = Object.assign( person, any )

console.log( newPerson );

Object.freeze( person )

person.name = 'Fernando Filter'
console.log( person.name );