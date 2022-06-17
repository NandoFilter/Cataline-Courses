interface Vehicle {
    wheels: number
    speedUp: () => void
    break?: () => void
}

// Extends
interface Moto extends Vehicle {
    cap: boolean
    tilt: () => void
}

// Implements
class CreateVehicle implements Vehicle {
    wheels: number;

    constructor(wheels: number) {
        this.wheels = wheels;
    }

    speedUp() {
        console.log('Speeding Up');
    }
}