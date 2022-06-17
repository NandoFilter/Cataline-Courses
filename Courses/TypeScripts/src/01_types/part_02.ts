// Union
let age: number | string

age = 20
age = 'Vinte'

function showPet(pet: 'Dog' | 'Cat' | 'Bunny') {
    console.log(pet);
}

showPet('Dog')

// Aliases
type Pet = 'Dog' | 'Cat' | 'Bunny'

function displayPet(pet: Pet) {
    console.log(pet);
}

displayPet('Cat')

// Inference
let msg = 'Text'

// ERROR: message = 123

// Assertion
let inputName = document.querySelector('#name') as HTMLInputElement

inputName.value