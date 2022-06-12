// String, Number & Boolean

let message: string = 'Hello World'
let total: number = 0
let isOpen: boolean = true

console.log(`${message} | ${total} | ${isOpen}`)

// Any, Void & Never

let item: any = 89
item = null
item = 'Hello World'
item = false

function showInformation(name: string = 'Fernando'): void {
    console.log(name)
}

function error(): never {
    throw new Error('Error')
}