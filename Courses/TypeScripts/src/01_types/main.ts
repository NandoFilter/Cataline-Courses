// String --------------------
let message: string = 'Hello World'

// Number --------------------
let total: number = 0

// Boolean --------------------
let isOpen: boolean = true

// Any --------------------
let item: any = 89
item = null
item = 'Hello World'
item = false

// Void --------------------
function showInformation(name: string = 'Fernando'): void {
    console.log(name)
}

// Never --------------------
function error(): never {
    throw new Error('Error')
}

// Array --------------------
let numbers: number[] = [1, 2, 3, 4] // Array<number>

// Tuple --------------------
let items: [number, string, boolean] = [1, 'text', true]

// Enum --------------------
enum Colors {
    white = '#fff',
    black = '#000'
}

let white: Colors = Colors.white;