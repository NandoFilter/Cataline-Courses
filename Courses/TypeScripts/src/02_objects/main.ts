interface User {         // Interface
    name: string,
    readonly age: number // Readonly
    address?: {          // Opcional
        city: string,
        UF: string,
    },
    sayHello: () => void
}

const user: User = {
    name: 'Fernando',
    age: 20,
    address: {
        city: 'Encantado',
        UF: 'RS'
    },
    sayHello: () => console.log('Olá')
}

// Cannot assign to 'age' because it is a read-only property.
// user.age = 21

function showCity(user: User) {
    return user.address?.city // user.address ? user.address?.city : undefined
}

const response = showCity(user)

console.log(response);
