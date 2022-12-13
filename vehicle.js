/*Napraviti klasu Vehicle koja ima sledeca polja:
- brand, inicijalno prazan string
- numberOfWheels, inicijalno 1
- currentSpeed, inicijalno 0
- speedlimit, inicijalno 0 */

export class Vehicle {
    constructor (brand = "", numberOfWheels = 1, currentSpeed = 0, speedLimit = 0) {
        this.brand = brand;
        this.numberOfWheels = numberOfWheels;
        this.currentSpeed = currentSpeed;
        this.speedLimit = speedLimit;
    }

    // metoda accelerate koja koristi Math.random i generise broj izmedju 1 i speedLimit i njime azurira currentSpeed polje:
    accelerate() {
        return this.currentSpeed = Math.ceil(Math.random()*this.speedLimit);
    }

    /* metoda status metoda koja provjerava trenutnu vrijednost currentSpeed polja i ako je ova:
        1. veca od speedLimit / 2: ispisuje u konzoli "You are going too fast, be careful!"
        2. manja ili jednaka speedLimit / 2: ispisuje u konzoli "Thanks for driving safely!" */
    status() {
        if(this.currentSpeed>(this.speedLimit/2)){
            console.log("You are going too fast, be careful!");
        } else {
            console.log("Thanks for driving safely!");
        }
    }
}