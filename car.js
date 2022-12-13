/*Napraviti klasu Car koja ekstenduje Vehicle i:
- "gazi" numberOfWheels setujuci 4 kao inicijalnu vrijednost,
- ima polje tankCapacity cija je inicijalna vrijednost 55
- ima polje currentFuelQuantity koja opet koristi Math.random izmedju 0 i tankCapacity
- ima metodu getMissingQuantityFromTank koja ispisuje u konzoli: "You need x liters to fill up your tank!" */

import { Vehicle } from "./vehicle.js";

export class Car extends Vehicle {
    constructor (brand, speedLimit, numberOfWheels, tankCapacity = 55, currentFuelQuantity) {
        super(brand, speedLimit, numberOfWheels);
        this.tankCapacity = tankCapacity;
        this.currentFuelQuantity = currentFuelQuantity;
    }

    currentFuelRandom () {
        return this.currentFuelQuantity = Math.ceil(Math.random()*this.tankCapacity);
    }

    getMissingQuantityFromTank() {
        console.log("You need " + (this.tankCapacity-this.currentFuelQuantity) + " liters to fill up your tank!");
    }
}


const masina = new Car ("Audi", 80);

// masina.currentFuelRandom(); // poziva funkciju da izracuna koliko goriva ima
// console.log("You have " + masina.currentFuelRandom() + (" liters of fuel."))
// masina.getMissingQuantityFromTank();

// masina.accelerate(); // poziva funkciju za odredjivanje brzine
// console.log("You are driving " + masina.accelerate() + " km/h.");
// masina.status(); //poziva funkciju za opreznu/neopreznu voznju